from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import UserAccount

@admin.register(UserAccount)
class CustomUserAdmin(BaseUserAdmin):
    model = UserAccount
    list_display = ('username', 'is_staff',)
    search_fields = ('username', 'is_staff',)
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser'),
        }),
    )