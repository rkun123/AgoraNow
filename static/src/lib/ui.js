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
    positioningInit: (clickCallback)=>{
		//$("#createMarker").css("visibility", "hidden");
		//click event
    	$("#createMap").click( function(event){
			let wrapperOffset = $("#createMap").offset();
			let x = (event.clientX - wrapperOffset.left) / $("#createMap").width();
			let y = (event.clientY - wrapperOffset.top) / $("#createMap").height();
			$("#createMarker").css("visibility", "visible");
			$("#createMarker").css("top", y*100 + "%");
			$("#createMarker").css("left", x*100 + "%");
			console.log(event);
			console.log(wrapperOffset);
			console.log("clientX:"+event.clientX + ", delegateTarget.x:"+event.delegateTarget.x);
			console.log(x + " x " + y);
			clickCallback(x * 100, y * 100);
		});
		//
    }
}
