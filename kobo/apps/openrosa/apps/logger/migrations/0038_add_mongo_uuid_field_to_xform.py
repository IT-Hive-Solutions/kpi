# Generated by Django 4.2.15 on 2024-10-24 20:16

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('logger', '0037_remove_xform_has_kpi_hooks_and_instance_posted_to_kpi'),
    ]

    operations = [
        migrations.AddField(
            model_name='xform',
            name='mongo_uuid',
            field=models.CharField(
                db_index=True, max_length=100, null=True, unique=True
            ),
        ),
    ]
