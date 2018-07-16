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
            createUserData:{
                username: "",
                password: "",
                password_confirm: ""
            },
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
                createError: false,
                createUserError: false,
                createUserConfirmPasswordError: false
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
            createUser:function(e){
                if(this.createUserData.password == this.createUserData.password_confirm){
                    api.createUser(this.createUserData.username, this.createUserData.password,(issuc)=>{
                        console.log(issuc);
                        if(issuc){
                            console.log("Making user have successed");
                            this.username = this.createUserData.username;
                            this.password = this.createUserData.password;
                            this.login();
                            this.UIflags.createUserError = this.UIflags.createUserConfirmPasswordError = false;
                        }else{
                            console.log("Making user have insuccessed");
                            console.log(issuc);
                            this.UIflags.createUserError = true;
                        }
                    })
                }else{
                    this.UIflags.createUserConfirmPasswordError = true;
                }
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
                console.log("Delete: " + status_id);
                api.deleteStatus(status_id, (data)=>{
                    if(data){
                        var i = this.statusArray.findIndex((elem)=>{
                            return elem.status_id === status_id;
                        });
                        this.statusArray.splice(i, 1);
                    }
                });
            },
			initPosView: function(e){
                console.log("Initialize canvas");
                ui.positioningInit((x, y)=>{
					this.createData.pos_X = x;
					this.createData.pos_Y = y;
				});
			}
        }
    });
}
