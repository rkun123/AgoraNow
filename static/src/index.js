import Vue from "vue";


let app;
window.onload = ()=>{
    app = new Vue({
        el: "#app",
        data:{
            message: "Hello, World"
        }
    });
}
