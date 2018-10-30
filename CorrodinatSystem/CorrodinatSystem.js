class CorrodinatSystem {
	drawgrid(a){
		var cols = height / a;
		var rows = width / a;
		for(var y = 0; y < cols; y++){
			for(var x = 0; x < rows; x++){
				rect(y*a,x*a,a,a);
			}	
		}
		return;
	}
	drawAxies(){
		strokeWeight(3);
		stroke(225,225,225);
		// y axis
		line(height/2,-height,height/2,height);
		// x axis
		line(-width,width/2,width,width/2);	
	}

	drawCorrodinatSystem(a1,a2){
	noFill();
	strokeWeight(1);
	stroke(75,75,75);
	this.drawgrid(a1);
	strokeWeight(2);
	stroke(125,125,125);
	this.drawgrid(a2);
	this.drawAxies();
	}
}

function sinWeave(theta, magnitude){
	return (sin(PI-theta)*magnitude);
}
function cosWeave(theta, magnitude){
	return (cos(PI-theta)*magnitude);
}




