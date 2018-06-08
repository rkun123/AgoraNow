from django.db import models
import datetime
from django.utils import timezone
import uuid

# Create your models here.
class User(models.Model):
    user_id = models.CharField(max_length=50,default=uuid.uuid4())
    created_at = models.DateTimeField(default=timezone.now())
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    #tw_token = models.CharField(max_length=50)
    #auto id fieldresultData["session_id"] = setSession(record.user_id)

class Follows(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name="follows")
    target = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name="followers")
