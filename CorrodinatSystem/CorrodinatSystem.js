// version 1.0 -DAE
function CorrodinatSystem(Areal_1, Areal_2, width,height) {
	this.a1 = Areal_1;
	this.a2 = Areal_2;
	this.width = width;
	this.height = height;
	this.points	= [];

	this.drawGrid = function(a){
		if(a !== 0){
			var cols = this.height / a;
			var rows = this.width / a;
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
		line(this.height/2,-this.height,this.height/2,this.height);
		// x axis
		line(-this.width,this.width/2,this.width,this.width/2);	
	}

	this.render = function(){
		if(this.height !== 0 && this.width !== 0){
			noFill();
			strokeWeight(1);
			stroke(75,75,75);
			this.drawGrid(this.a1);
			strokeWeight(2);
			stroke(125,125,125);
			this.drawGrid(this.a2);
			this.drawAxies();
		} else {
			console.log("Height, and or width is 0");
		}

	}

	this.renderPoints = function(){
		for(var i = 0; i < this.points.length; i++){
			point(this.points[i].x, this.points[i].y);
		}
	}

	this.addVector = function(Vec){
		this.points.push(Vec);
	}

	this.clearVectors = function(){
		this.points = [];
	}

	// this.calculateGridSize = function(){
	// 	// this function only changes the grid, and the actual height of the graf. witch is the desire. 
	// 	// Do i even want this function?
	// 	var maxX = 0;
	// 	var minX = 0;
	// 	var diff = 0;
	// 	for(var i = 0; i < this.points.length; i++){
	// 		(this.points[i].x > maxX) ? (maxX = this.points[i].x); : continue; 
	// 		(this.points[i].x < minX) ? (minX = this.points[i].x); : continue;
	// 	}		
	// 	diff = abs(maxX - minX);
	// 	if(this.height !== 0 ){
	// 		if((diff / this.height) > 20){ // not sure about the 20 here. need tests. 
	// 			this.Areal_1 = diff / this.height;
	// 			// wait with Areal_2 
	// 		}else{
	// 			this.Areal_1 = 20;
	// 		}
	// 	}
	// }
}