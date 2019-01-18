from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import WebsitePageViewSet


router = DefaultRouter()
router.register('auto-rti', WebsitePageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
