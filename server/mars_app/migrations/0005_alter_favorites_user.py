# Generated by Django 4.2 on 2023-04-30 21:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mars_app', '0004_favorites'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favorites',
            name='user',
            field=models.CharField(max_length=255),
        ),
    ]
