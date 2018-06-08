import Vue from "vue";
import Api from "./lib/apiCom"
import ui from "./lib/ui"

let app;
window.onload = ()=>{
    ui();
    let api = new Api();

    //main app
    app = new Vue({
        el: "#app",
        data:{
            header: "<h1>あごらなう</h1>",
            message: "Hello, World",
            statusArray:[],
            UIflags:{
                loginPopup:false
            },
            username:"",
            password:"",
        },
        created:function(){
            api.updateStatusData((data)=>{
                this.statusArray = data;
            });
        },
        methods:{
            login:function(e){
                api.login(this.username, this.password, (isLogined)=>{
                    if(isLogined){
                        this.UIflags.loginPopup = false;
                    }else{
                        this.username = this.password = "";
                    }
                });
            }
        }
    });



}
