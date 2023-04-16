from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import api_view

def index(request):
    print('index')
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)

# # Fake whoami route for --returns json for logged in user

@api_view(['GET'])
def whoami(request):
    user = {'Name' : 'Javier', 'Email': 'GMail',}
    return JsonResponse(data = user)