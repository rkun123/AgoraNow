from django.urls import path
from .views import *

urlpatterns = [
    path('create_user',createUser),
    path('get_user',getUser),
    path('get_all_user', getAllUser),
    path('login', login)
]
