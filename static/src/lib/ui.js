export default {
    hideLoginmodal: ()=>{
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#loginModal').modal('hide');
    },
    hideCreatemodal: ()=>{
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#createModal').modal('hide');
    },
    clickPositioningInit:()=>{
        console.log("clickPositioningInit was called");
        let imgDOM = $("#clickPositioningImg")[0];
        imgDOM.click(function(e){
            console.log(e.pageX + " : " + e.pageY);
        });
    }
}
