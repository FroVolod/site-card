from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser

import csv
from django.db.models import Q

from .models import WebsitePage, ProductList
from .serializers import WebsitePageSerializer, ProductListSerializer


class WebsitePageViewSet(viewsets.ModelViewSet):
    queryset = WebsitePage.objects.all()
    serializer_class = WebsitePageSerializer
    lookup_field = 'slug'


class ProductListView(APIView):
    parser_classes = (MultiPartParser, )

    def get(self, request):
        category = request.GET.get('category')
        car_name = request.GET.get('car_name')
        if category or car_name:
            product_list = ProductList.objects.filter(Q(category=category) | Q(car_name=car_name))
        else:
            product_list = ProductList.objects.all()

        paginator = self.settings.DEFAULT_PAGINATION_CLASS()
        page = paginator.paginate_queryset(product_list, request)

        product_list_serializer = ProductListSerializer(page, many=True)
        return paginator.get_paginated_response(product_list_serializer.data)

    def post(self, request, *args, **kwargs):
        up_file = request.FILES['file']
        if up_file.name.split('.')[1] == 'csv':
            destination = open('./auto_rti_api/uploads/price/' + up_file.name, 'wb+')
        else:
            destination = open('./auto_rti_api/uploads/images/' + up_file.name, 'wb+')
        for chunk in up_file.chunks():
            destination.write(chunk)
            destination.close()

        if up_file.name.split('.')[1] == 'csv':
            ProductList.objects.all().delete()
            data = csv.reader(open('./auto_rti_api/uploads/price/price.csv'), delimiter=';')
            for row in data:
                if row[0] != 'Код':
                    product_list = ProductList()
                    product_list.product_id = row[0]
                    product_list.catalog_id = row[1]
                    product_list.product_name = row[2]
                    product_list.price = row[3]
                    product_list.category = row[7]
                    product_list.car_name = row[8]
                    product_list.manufacturer = row[10]
                    product_list.save()
        print('# File {} downloaded'.format(up_file.name))
        return Response({'status': 201})
