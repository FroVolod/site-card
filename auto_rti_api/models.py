from django.db import models


class WebsitePage(models.Model):
    title = models.CharField(max_length=20, unique=True)
    body = models.TextField(blank=True, db_index=True)
    slug = models.SlugField(max_length=20, blank=True, unique=True)
