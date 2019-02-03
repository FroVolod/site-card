from django.db import models


class WebsitePage(models.Model):
    title = models.CharField(max_length=20, unique=True)
    body = models.TextField(blank=True)
    slug = models.SlugField(max_length=20, blank=True, unique=True)


class ProductList(models.Model):
    product_id = models.CharField(max_length=20, unique=True)
    catalog_id = models.CharField(max_length=20, blank=True, db_index=True)
    product_name = models.CharField(max_length=20, blank=True)
    price = models.CharField(max_length=20, blank=True)
    category = models.CharField(max_length=20, blank=True, db_index=True)
    car_name = models.CharField(max_length=20, blank=True, db_index=True)
    manufacturer = models.CharField(max_length=20, blank=True)
    