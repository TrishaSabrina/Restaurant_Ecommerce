
from django.urls import path
from ecokitchen import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('products/',views.getProducts,name="getProducts"),
    path('products/<str:pk>',views.getProduct,name="getProduct"),
    path('user/profile/',views.getUserProfiles,name="getUserProfiles"),
    path('users/',views.getUsers,name="getUsers"),
    path('users/register/',views.registerUser,name='register'),

] 