# Generated by Django 2.1.5 on 2019-02-01 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auto_rti_api', '0002_websitepage_slug'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_id', models.CharField(max_length=20, unique=True)),
                ('catalog_id', models.CharField(blank=True, db_index=True, max_length=20)),
                ('product_name', models.CharField(blank=True, max_length=20)),
                ('price', models.CharField(blank=True, max_length=20)),
                ('category', models.CharField(blank=True, db_index=True, max_length=20)),
                ('car_name', models.CharField(blank=True, db_index=True, max_length=20)),
                ('manufacturer', models.CharField(blank=True, max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name='websitepage',
            name='body',
            field=models.TextField(blank=True),
        ),
    ]
