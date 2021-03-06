import Vue from "vue";
import Api from "./lib/apiCom"
import ui from "./lib/ui"

let app;
window.onload = ()=>{
    let api = new Api();

    //main app
    app = new Vue({
        el: "#app",
        data:{
            header: "<h1>あごらなう</h1>",
            message: "Hello, World",
            statusArray:[],
            userData:{
                user_id: "",
                username:""
            },
            createData:{
                comment:"",
                pos_X:"",
                pos_Y:""
            },
            UIflags:{
                loginError: false,
                logined: false,
                createError: false
            },
            username:"",
            password:"",
        },
        created:function(){
            api.updateStatusData((data)=>{
                if(data) this.statusArray = data;
            });
        },
        methods:{
            login:function(e){
                api.login(this.username, this.password, (isLogined)=>{
                    if(isLogined){
                        ui.hideLoginmodal();
                        this.UIflags.logined = true;
                        api.updateMyUserData((isSuc, data)=>{
                            console.log(data);
                            if(isSuc){
                                this.userData.username = data.username;
                                this.userData.user_id = data.user_id;
                            }
                        })
                    }else{
                        this.username = this.password = "";
                        this.UIflags.loginError = true;
                    }
                });
            },
            create:function(e){
                api.createStatus(this.createData.pos_X, this.createData.pos_Y, this.createData.comment, (status_id)=>{
                    console.log(status_id);
                    if(!status_id) this.UIflags.createError = true;
                    api.getStatusData(status_id, (data)=>{
                        if(data){
                            this.statusArray.push(data);
                            ui.hideCreatemodal();
                            this.UIflags.createError = false;
                        }
                    })
                });
                this.createData = {};

                console.log(this.createData);
            },
            deleteStatus:function(e, status_id){
                console.log("Delete: "+status_id);
                api.deleteStatus(status_id, (data)=>{
                    if(data){
                        var i = this.statusArray.findIndex((elem)=>{
                            return elem.status_id === status_id;
                        });
                        this.statusArray.splice(i, 1);
                    }
                });

            }
        }
    });



}
