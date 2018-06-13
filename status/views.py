#from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseGone, HttpResponseNotFound, JsonResponse
from django.http import *
from django.shortcuts import render
from .models import Status
from user.models import User
from datetime import datetime
import json
import uuid
import sessionController
import myUtils


# Create your views here.

def status_update(req):
    #update status (POST) by session_id
    req_data = myUtils.parseReq(req)
    user_id = sessionController.getSession(req_data["session_id"])
    author = User.objects.filter(user_id=user_id)[0]
    print(author)
    if author:
        status_record = Status(status_id=uuid.uuid4(), author=author, pos_X=req_data["pos_X"], pos_Y=req_data["pos_Y"], comment=req_data["comment"])
        status_record.save()
        return JsonResponse({"status_id":status_record.status_id})

    else:
        return HttpResponseBadRequest()

def status_get(req):
    #get status (GET) details by status_id
    status_id = req.GET.get("status_id")
    status_record = Status.objects.filter(status_id=status_id)[0]
    if status_record:
        data = myUtils.genStatusDict(status_record)
        return JsonResponse(data)
    else:
        return HttpResponseNotFound()

def getAllStatus(req):
    dataList = []
    print(Status.objects.all())
    for i in Status.objects.all():
        data = myUtils.genStatusDict(i)
        dataList.append(data)
    dataDict = {}
    dataDict["data"] = dataList
    return JsonResponse(dataDict)

def status_delete(req):
    status_id = req.GET.get("status_id")
    session_id = req.GET.get("session_id")
    print(status_id)
    status_record = Status.objects.get(status_id=status_id)
    user_id = sessionController.getSession(session_id)
    author = User.objects.filter(user_id=user_id)[0]
    print(status_record)
    if status_record and status_record.author == author:
        print("Deleting collum was detected!!")
        status_record.delete()
        return HttpResponse()
    else:
        return Http404()
