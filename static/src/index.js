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
                username:"",
            },
            createData:{
                comment:"",
                pos_X:"",
                pos_Y:""
            },
            UIflags:{
                loginError:false,
                logined:false
            },
            username:"",
            password:"",
        },
        created:function(){
            api.updateStatusData((isSuc, data)=>{
                if(isSuc) this.statusArray = data;
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
                            if(isSuc) this.userData.username = data.username;
                        })
                    }else{
                        this.username = this.password = "";
                        this.UIflags.loginError = true;
                    }
                });
            }
        }
    });



}
