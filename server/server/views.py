from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import api_view

def index(request):
    print('index')
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)
