function CorrodinatSystem(Areal_1,Areal_2) {
	this.a1 = Areal_1;
	this.a2 = Areal_2;


	this.drawgrid = function(a){
		if(a !== 0){
		var cols = height / a;
		var rows = width / a;
		for(var y = 0; y < cols; y++){
			for(var x = 0; x < rows; x++){
				rect(y*a,x*a,a,a);
			}	
		}
		}
		return;
	}
	this.drawAxies = function(){
		strokeWeight(3);
		stroke(225,225,225);
		// y axis
		line(height/2,-height,height/2,height);
		// x axis
		line(-width,width/2,width,width/2);	
	}

	this.Render = function(){
		if(height !== 0 && width !== 0){
			noFill();
			strokeWeight(1);
			stroke(75,75,75);
			this.drawgrid(this.a1);
			strokeWeight(2);
			stroke(125,125,125);
			this.drawgrid(this.a2);
			this.drawAxies();
		} else {
			console.log("Height, and or width is 0");
		}

	}
}


