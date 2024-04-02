from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.FloatField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    def str(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=200)

    def str(self):
        return self.name