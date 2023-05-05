from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import AppUser
from .models import Favorites
from .serializers import FavoriteSerializer
import json

# Create your views here.
def index(request):
    the_index = open('static/index.html')
    return HttpResponse(the_index)


# Create your views here.
@api_view(["POST"])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    name = request.data['name']
    super_user = False
    staff = False
    if 'super' in request.data:
        super_user = request.data['super']
    if 'staff' in request.data:
        staff = request.data['staff']
    try:
        new_user = AppUser.objects.create_user(username = email, email = email, name = name, password = password, is_superuser = super_user, is_staff = staff)
        new_user.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})


@api_view(["POST"])
def user_log_in(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username = email , password = password)
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            print(user)
            return JsonResponse({'email': user.email, 'name':user.name})
        except Exception as e:
            print(e)
            return JsonResponse({'login':False})
    return JsonResponse({'login':False})

@api_view(['POST'])
def user_log_out(request):
    try:
        logout(request)
        return JsonResponse({"logout":True})
    except Exception as e:
        print(e)
        return JsonResponse({"logout":False})
    
@api_view(["GET"])
def curr_user(request):

    if request.user.is_authenticated:
        user_info = serialize("json",  [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})
    
@api_view(["POST"])
def addToFavorites(request):
    user = request.data['user']
    title = request.data['title']
    date = request.data['date']
    url = request.data['url']
    try:
        new_favorite = Favorites.objects.create(user = user, title = title, date = date, url = url)
        new_favorite.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
@api_view(["GET"])
def seeFavorites(request):
    favorites = Favorites.objects.all()
    serializer = FavoriteSerializer(favorites, many=True)
    return Response(serializer.data)

@api_view(["DELETE"])
def deleteFavorite(request, id=None):
    favorites = Favorites.objects.filter(id=id)
    favorites.delete()
    return JsonResponse({"success":True})