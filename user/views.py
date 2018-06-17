from django.shortcuts import render
from user.models import User
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse, HttpResponseGone, HttpResponseNotFound
import uuid
import json
from sessionController import *
import myUtils

# Create your views here.

def createUser(req):
    #Create Account (POST)
    userRecord = User()
    try:
        reqData = myUtils.parseReq(req)
        if len(User.objects.filter(username=reqData["username"])):
            return HttpResponseBadRequest("Received username has already exists.")
        userRecord.username = reqData["username"]
        userRecord.password = reqData["password"]
        userRecord.save()
        return HttpResponse()
    except:
        return HttpResponseBadRequest()

#        return HttpResponse(HttpResponseBadRequest())

def getUser(req):
    #Provide UserDetail by sessionID (GET)
    try:
        selecteduserId = getSession(req.GET.get("session_id"))
    except:
        return HttpResponseBadRequest()

    print(selecteduserId)
    loadedData = User.objects.filter(user_id=selecteduserId)
    if len(loadedData) == 0:
        return HttpResponseBadRequest()
    print(loadedData)
    data = loadedData[0]
    userData = {}
    userData["user_id"] = data.user_id
    userData["username"] = data.username
    userData["created_at"] = myUtils.genDateFormat(data.created_at)
    print(userData)

    return JsonResponse(userData)
#for debug

def getAllUser(req):
    resultData = []
    for data in User.objects.all():
        userData = {}
        userData["user_id"] = data.user_id
        userData["username"] = data.username
        userData["created_at"] = myUtils.genDateFormat(data.created_at)
        resultData.append(userData)
    return HttpResponse(resultData)


def login(req):
    #login (POST) and return session ID
    data = myUtils.parseReq(req)
    print(req.body.decode('utf-8'))
    resultData = {}
    if(data):
        #find users
        record = User.objects.filter(username=data["username"], password=data["password"])[0]
        resultData["session_id"] = setSession(record.user_id)
        print(resultData)
        return JsonResponse(resultData)
    else:
        return HttpResponseBadRequest()
