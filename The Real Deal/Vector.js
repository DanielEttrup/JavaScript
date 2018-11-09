function Vector(x, y, length){
	this.x = x;
	this.y = y;
	this.length = length;

	this.render = function(context){
		context.fillStyle = "#FFFFFFFF";
		context.fillRect(this.x, this.y, 2, 2);
	}

}