
from django.urls import path
from ecobangla import views

urlpatterns = [
path('product2/', views.getProducts),
path('product2/<str:pk>/', views.getProduct),
]