import axios from "axios"

export default class {
    constructor(){
        console.log("Instanced apiCom!!");
        this.axios = axios.create({
            baseURL:"../"
        })
        this.statusArray = [];
    }
    //"login" args->(username, password, callback(bool))
    login(user, pass, callback){
        this.axios.post("/user/login",{"username": user, "password": pass})
        .then((res)=>{
            this.sessionID = res.data.session_id;
            console.log("Success!!");
            callback(true);
        })
        .catch((err)=>{
            console.log("Failed!!" + err);
            callback(false);
        })
    }
    //"updateStatusData" call once at start. args->(callback(bool, array))
    updateStatusData(callback){
        this.axios.get("/status/get_all_status")
        .then((res)=>{
            console.log(res.data);
            //this.statusArray = res.data.data;
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            callback(null);
        })
    }
    getStatusData(status_id, callback){
        this.axios.get("/status/get_status?status_id=" + status_id)
        .then((res)=>{
            console.log(res.data);
            //this.statusArray = res.data.data;
            callback(res.data);
        })
        .catch((err) => {
            console.log(err);
            callback(null)
        })
    }
    //"updateMyUserData" was called when user logined. args->(callback(bool, array))
    updateMyUserData(callback){
        this.axios.get("/user/get_user?session_id=" + this.sessionID)
        .then((res)=>{
            callback(true, res.data);
            console.log(res)
        })
        .catch((err)=>{
            callback(false, {})
            console.log("Errored!!");
        })
    }
    //"createStatus" args->(int pos_X, int pos_Y, string comment, callback(statusData))
    createStatus(pos_X, pos_Y, comment, callback){
        this.axios.post("/status/update",{
            "session_id":this.sessionID,
            "pos_X": pos_X,
            "pos_Y": pos_Y,
            "comment": comment
        })
        .then((res)=>{
            callback(res.data.status_id);
        })
        .catch((err)=>{
            console.log(err);
            callback(null);
        })
    }
    //"deleteStatus"
    deleteStatus(status_id, callback){
        this.axios.post("status/delete_status?session_id=" + this.sessionID + "&status_id=" + status_id)
        .then((res)=>{
            if(res) callback(true);
        })
        .catch((err)=>{
            console.log(err);
            callback(false);
        })
    }

}
