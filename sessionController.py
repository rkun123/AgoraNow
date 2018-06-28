import redis
import uuid

r = redis.StrictRedis(host="localhost", port=6379, db=0)


def setSession(user_id):
    #return sessionID
    sessionID = uuid.uuid4()
    r.set(sessionID, user_id)
    return sessionID

def getSession(sessionID):
    try:
        return r.get(sessionID).decode("utf-8")
    except:
        return 0
