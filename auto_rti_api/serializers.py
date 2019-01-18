from rest_framework import serializers

from .models import WebsitePage


class WebsitePageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = WebsitePage
        fields = ('url', 'id', 'slug', 'title', 'body')
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
