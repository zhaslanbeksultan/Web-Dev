from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.index),
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products),
]