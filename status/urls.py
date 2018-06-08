from django.urls import path
from .views import status_update, status_get

urlpatterns = [
    path('update',status_update),
    path('get', status_get)
]
