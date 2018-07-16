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
		//click event
    	$("#createMap").click( function(event){
			let wrapperOffset = $("#createMap").offset();
			//let x = (event.clientX - event.delegateTarget.x) / $("#createMap").width();
			//let y = (event.clientY - event.delegateTarget.y) / $("#createMap").height();
			let x = (event.clientX - wrapperOffset.left) / $("#createMap").width();
			let y = (event.clientY - wrapperOffset.top) / $("#createMap").height();
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
