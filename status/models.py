from django.db import models
from user.models import User
from django.utils import timezone
import uuid
# Create your models here.
class Status(models.Model):
    def __str__(self):
        return str(self.pos_X)+" x "+str(self.pos_Y)
    status_id = models.CharField(max_length=50, default=uuid.uuid4())
    created_at = models.DateTimeField(default=timezone.now())
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    pos_X = models.FloatField()
    pos_Y = models.FloatField()
    comment = models.CharField(max_length=50 ,default="has no some comment.")
    #auto_id_field
