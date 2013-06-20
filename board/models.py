from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers

class Project(models.Model):
    title = models.CharField(max_length=50)
    user = models.ForeignKey(User, related_name='projects')

class Column(models.Model):
    project = models.ForeignKey(Project)
    title = models.CharField(max_length=50)
    limit = models.IntegerField(default=0)

class Card(models.Model):
    project = models.ForeignKey(Project)
    column = models.ForeignKey(Column)
    title = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=300)
    priority = models.IntegerField(default=1)
    startdate = models.IntegerField(default=0)
    enddate = models.IntegerField(default=0)

class UserSerializer(serializers.ModelSerializer):
    projects = serializers.PrimaryKeyRelatedField(many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'projects')