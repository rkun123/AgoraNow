# Generated by Django 2.0.4 on 2018-05-13 12:32

import datetime
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_auto_20180513_0847'),
    ]

    operations = [
        migrations.CreateModel(
            name='Follows',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 5, 13, 12, 32, 27, 318037)),
        ),
        migrations.AlterField(
            model_name='user',
            name='user_id',
            field=models.CharField(default=uuid.UUID('a9fce884-1a0f-4168-b88c-2cda66293880'), max_length=50),
        ),
        migrations.AddField(
            model_name='follows',
            name='owner',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='follows', to='user.User'),
        ),
        migrations.AddField(
            model_name='follows',
            name='target',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='followers', to='user.User'),
        ),
    ]