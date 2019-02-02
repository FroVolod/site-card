from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

import csv 

from .models import WebsitePage, ProductList
from .serializers import WebsitePageSerializer, ProductListSerializer


class WebsitePageViewSet(viewsets.ModelViewSet):
    queryset = WebsitePage.objects.all()
    serializer_class = WebsitePageSerializer
    lookup_field = 'slug'


class ProductListView(APIView):
    def get(self, request):
        product_list = ProductList.objects.all()
        product_list_serializer = ProductListSerializer(product_list, many=True)
        return Response(product_list_serializer.data)


    def post(self, request):
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
        return Response(status = 201)
