window.onload = function(){
	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = 400,
	height = canvas.height = 400;

	var vector = new Vector(200, 200, 50);
	
	update();

	function update(){
		context.fillStyle = "rgba(51, 51, 51, 0.3)";
		context.fillRect(0, 0, width, height);

		context.fillStyle = "rgba(255, 0, 0, 0.3)";
		context.fillRect(0, 200, 400, 2);

		vector.render(context);



		window.requestAnimationFrame(update);
	}


};
function radiansToDegrees(radian){
	return radian*180/Math.PI;	
}
function degreesToRadians(degree){
	return degree/180*Math.PI;
}