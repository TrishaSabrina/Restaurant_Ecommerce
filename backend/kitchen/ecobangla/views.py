from django.shortcuts import render

from .product2 import product2
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def getProducts(request):
    return Response(product2)



@api_view(['GET'])
def getProduct(request,pk):
    product=None
    for i in product2:
        if i['_id']== pk:
            product=i
            break
    return Response(product)

# Create your views here.
