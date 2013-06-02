import models
from django.contrib import admin
from board.models import Project, Column, Card

admin.site.register(Project)
admin.site.register(Column)
admin.site.register(Card)