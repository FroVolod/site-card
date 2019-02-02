from rest_framework import serializers

from .models import WebsitePage, ProductList


class WebsitePageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = WebsitePage
        fields = ('url', 'id', 'slug', 'title', 'body')
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductList
        fields = (
            'id', 'product_id', 'catalog_id', 'product_name', 'price',
            'category', 'car_name', 'manufacturer'
        )
