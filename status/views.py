#from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseGone, HttpResponseNotFound, JsonResponse
from django.http import *
from django.shortcuts import render
from .models import Status
#from user.models import User
from user.models import User
from datetime import datetime
import json
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
        status_record = Status(author=author, pos_X=req_data["pos_X"], pos_Y=req_data["pos_Y"])
        status_record.save()
        return JsonResponse({"status_id":status_record.status_id})

    else:
        return HttpResponseBadRequest()

def status_get(req):
    #get status (GET) details by status_id
    status_id = req.GET.get("status_id")
    status_record = Status.objects.filter(status_id=status_id)[0]
    if status_record:
        return JsonResponse(status_record.__dict__)
    else:
        return HttpResponseNotFound()

def getAllStatus(req):
    dataList = []
    print(Status.objects.all())
    for i in Status.objects.all():
        data = {}
        data["status_id"] = i.status_id
        data["created_at"] = myUtils.genDateFormat(i.created_at)
        data["author"] = {"username": i.author.username, "user_id": i.author.user_id}
        data["position"] = {"x": i.pos_X, "y": i.pos_Y}
        data["comment"] = i.comment
        dataList.append(data)
    dataDict = {}
    dataDict["data"] = dataList
    return JsonResponse(dataDict)
