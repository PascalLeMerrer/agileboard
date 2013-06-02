from django.db import models
from django.contrib.auth.models import User

class Projects(models.Model):
    title = models.CharField(max_length=50)
    user = models.ForeignKey(User)

class Columns(models.Model):
    project = models.ForeignKey(Projects)
    title = models.CharField(max_length=50)
    limit = models.IntegerField(default=0)

class Cards(models.Model):
    project = models.ForeignKey(Projects)
    column = models.ForeignKey(Columns)
    title = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=300)
    priority = models.IntegerField(default=1)