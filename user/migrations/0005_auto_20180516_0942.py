# Generated by Django 2.0.4 on 2018-05-16 09:42

import datetime
from django.db import migrations, models
from django.utils.timezone import utc
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_auto_20180513_1325'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 5, 16, 9, 42, 9, 973633, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='user',
            name='user_id',
            field=models.CharField(default=uuid.UUID('8ff45c84-f10f-4c06-b4ea-2d58b922140e'), max_length=50),
        ),
    ]
