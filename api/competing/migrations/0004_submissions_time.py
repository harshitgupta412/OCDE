# Generated by Django 3.1.4 on 2020-12-07 05:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('competing', '0003_auto_20201207_0523'),
    ]

    operations = [
        migrations.AddField(
            model_name='submissions',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 7, 5, 36, 37, 407887)),
            preserve_default=False,
        ),
    ]
