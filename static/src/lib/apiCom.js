import axios from "axios"

export default class {
    constructor(){
        console.log("Instanced apiCom!!");
    }
    updateStatusData(){
        axios.get("http://127.0.0.1:8000/status/get_all_status")
        .then((res)=>{
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
