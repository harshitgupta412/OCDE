# Generated by Django 3.1.4 on 2020-12-07 08:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('competing', '0005_scores'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contest',
            fields=[
                ('contest_id', models.AutoField(primary_key=True, serialize=False)),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
            ],
        ),
        migrations.AddField(
            model_name='statement',
            name='accepted',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='statement',
            name='total_submissions',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='ContestScore',
            fields=[
                ('score', models.IntegerField()),
                ('cscore_id', models.AutoField(primary_key=True, serialize=False)),
                ('contest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='competing.contest')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='statement',
            name='contest',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='competing.contest'),
        ),
    ]
