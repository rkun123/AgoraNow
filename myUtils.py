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
