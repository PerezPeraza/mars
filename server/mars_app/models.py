from django.db import models
from django.contrib.auth.models import (AbstractUser)

# Create your models here.
class AppUser(AbstractUser):
    email = models.EmailField(
        max_length=250,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []