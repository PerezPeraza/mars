# Generated by Django 4.2 on 2023-04-30 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mars_app', '0005_alter_favorites_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='favorites',
            name='url',
            field=models.CharField(default='NA', max_length=255),
        ),
    ]
