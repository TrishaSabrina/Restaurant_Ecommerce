from django.shortcuts import render

from .product3 import product3
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def getProducts(request):
    return Response(product3)



@api_view(['GET'])
def getProduct(request,pk):
    product=None
    for i in product3:
        if i['_id']== pk:
            product=i
            break
    return Response(product)

# Create your views here.


# Create your views here.
