# Generated by Django 4.2.15 on 2025-04-16 11:18
from django.conf import settings
from django.db.models.query import QuerySet

from kobo.apps.organizations.models import Organization, OrganizationUser

CHUNK_SIZE = settings.LONG_RUNNING_MIGRATION_BATCH_SIZE


def run():
    """
    Backfills MMO metadata based on owner's profile
    """
    stop = False
    organization_user_pk = 0

    while not stop:
        if organization_users := get_queryset(organization_user_pk):
            organizations = []
            for organization_user in organization_users:
                organization_user_pk = organization_user.pk
                user = organization_user.user
                organization = organization_user.organization

                if (
                    organization.name
                    and organization.name.strip() != ''
                    and organization.name.startswith(user.username)
                ):
                    update = False
                    if organization_name := user.extra_details.data.get(
                        'organization', ''
                    ).strip():
                        update = True
                        organization.name = organization_name

                    if organization_website := user.extra_details.data.get(
                        'organization_website', ''
                    ).strip():
                        update = True
                        organization.website = organization_website

                    if organization_type := user.extra_details.data.get(
                        'organization_type', ''
                    ).strip():
                        update = True
                        organization.organization_type = organization_type

                    if update:
                        organizations.append(organization)

            if organizations:
                Organization.objects.bulk_update(
                    organizations, ['name', 'organization_type', 'website']
                )
        else:
            stop = True


def get_queryset(organization_user_id: int) -> QuerySet[OrganizationUser]:
    return (
        OrganizationUser.objects.filter(
            organizationowner__isnull=False, pk__gt=organization_user_id
        )
        .select_related('user', 'organization', 'user__extra_details')
        .order_by('pk')[:CHUNK_SIZE]
    )
