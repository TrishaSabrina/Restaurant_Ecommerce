
from django.urls import path
from ecodessert import views

urlpatterns = [
path('product3/', views.getProducts),
path('product3/<str:pk>/', views.getProduct),
]