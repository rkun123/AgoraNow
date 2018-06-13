from django.urls import path
from .views import *

urlpatterns = [
    path('update',status_update),
    path('get_status', status_get),
    path("get_all_status", getAllStatus),
    path("delete_status", status_delete)
]
