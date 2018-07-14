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
    positioningCanvasInit: (clickCallback)=>{
        console.log("Wow!!");
		let canvasWrapper = $(".canvasWrapper");
		let canvas = $("#positioningCanvas");
		//set canvas space as parent.
		console.log(canvasWrapper.width() + " : " + canvasWrapper.height());
		//canvas.attr("width", canvasWrapper.width());
		//canvas.attr("height", canvasWrapper.height());
		canvas.attr("width", 466);
		canvas.attr("height", 230);
        let ctx = canvas[0].getContext("2d");
        let mapImg = new Image();
        mapImg.src = "imgs/map.png";
        mapImg.onload = ()=>{
            ctx.drawImage(mapImg, 0, 0, 466, 230);
        }
		//click event
    	$("#positioningCanvas").click( function(event){
			let x, y;
        	let rect = $(event.target).offset();
        	x = event.pageX - rect.left;
        	y = event.pageY - rect.top;
        	let markerImg = new Image();
        	markerImg.src = "imgs/marker2.png";
        	markerImg.onload = ()=>{
            	ctx.drawImage(markerImg, x-50, y-50, 100, 100);
        	}
			clickCallback(x, y);
		});
		//
    }
}
