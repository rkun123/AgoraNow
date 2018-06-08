# Generated by Django 2.0.4 on 2018-05-16 09:42

import datetime
from django.db import migrations, models
from django.utils.timezone import utc
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('status', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='status',
            name='comment',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='status',
            name='status_id',
            field=models.CharField(default=uuid.UUID('68b68b3f-771d-4306-a527-a9741b5babe7'), max_length=50),
        ),
        migrations.AlterField(
            model_name='status',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 5, 16, 9, 42, 9, 974460, tzinfo=utc)),
        ),
    ]