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
            this.statusArray = res.data.data;
            callback(true,res.data.data);
        })
        .catch((err) => {
            console.log(err);
            callback(false,[])
        })
    }
    //"updateMyUserData" was called when user logined. args->(callback(bool, array))
    updateMyUserData(callback){
        this.axios.get("/user/get_user?session_id=" + this.sessionID)
        .then((res)=>{
            callback(true, res.data);
        })
        .catch((err)=>{
            callback(false, {})
        })
    }

}
