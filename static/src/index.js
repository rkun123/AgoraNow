import Vue from "vue";
import Api from "./lib/apiCom"

let app;
window.onload = ()=>{
    let api = new Api();
    api.updateStatusData();

    //main app
    app = new Vue({
        el: "#app",
        data:{
            header: "<h1>あごらなう</h1>",
            message: "Hello, World"
        }
    });
}
