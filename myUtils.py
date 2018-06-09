import json


def genDateFormat(datetimeObj):
    #return Dict of received datetime object
    result = {}
    result["year"] = datetimeObj.year
    result["month"] = datetimeObj.month
    result["day"] = datetimeObj.day
    result["hour"] = datetimeObj.hour
    result["minute"] = datetimeObj.minute
    result["second"] = datetimeObj.second
    return result

#Utils
def parseReq(req):
    #parse json POST request into dict
    try:
        rawData = req.body.decode("utf-8")
        return json.loads(rawData)
    except:
        return 0

def genStatusDict(modelObj):
    data = {}
    data["status_id"] = modelObj.status_id
    data["created_at"] = genDateFormat(modelObj.created_at)
    data["author"] = {"username": modelObj.author.username, "user_id": modelObj.author.user_id}
    data["position"] = {"x": modelObj.pos_X, "y": modelObj.pos_Y}
    data["comment"] = modelObj.comment
    return data
