function Spot(x,y,s){
	this.x = x,
	this.y = y,
	this.s = s,
	this.state = 0;

	this.render = function(){
		switch (this.state){
			case 1: fill(36,50,77); break;
			case 2: fill(181,120,74); break;
			default: fill(200);
		}
		ellipse(this.x,this.y,this.s,this.s);
	}

	this.checkIfPressed = function(x,y,currentState) {
		if(this.state == 0){
		var xdiff = Math.abs(this.x - x);
		var ydiff = Math.abs(this.y - y);
			if(xdiff < s/2 && ydiff < s/2){
				this.state = currentState;
				return true;
			} 
		}
	}
}
