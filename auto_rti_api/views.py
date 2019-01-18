from django.shortcuts import render

from rest_framework import viewsets

from .models import WebsitePage
from .serializers import WebsitePageSerializer


class WebsitePageViewSet(viewsets.ModelViewSet):
    queryset = WebsitePage.objects.all()
    serializer_class = WebsitePageSerializer
    lookup_field = 'slug'
