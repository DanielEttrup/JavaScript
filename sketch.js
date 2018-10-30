var theta = 1;
var theta2 = 1;
var Vector1;
var Vector2;
var Vector3;

var _points = [];
var _points2 = [];

function setup() {
	Vector1 = createVector();
	Vector2 = createVector();
	createCanvas(400,400);
	//frameRate(16);
	background(0); 
	corrodinatSystem = new CorrodinatSystem();
}

function draw() {
	background(0); 
 	corrodinatSystem.drawCorrodinatSystem(10,40);
 	Vector3 = createVector(Vector1.x+Vector2.x,Vector1.y+Vector2.y);
 	translate(width/2,height/2);
 	strokeWeight(4);


 	stroke(0,250,51);
 	line(0,0,Vector3.x,Vector3.y);
 	stroke(170,90,150);
 	line(0,0,Vector1.x,Vector1.y);
 	line(Vector1.x,Vector1.y,Vector2.x+Vector1.x,Vector2.y+Vector1.y);
 	Vector1.x = sinWeave(theta2,100);
 	Vector1.y = cosWeave(-theta,80);
 	Vector2.x = sinWeave(-theta2,50);
 	Vector2.y = cosWeave(theta,80);

 	if(theta > 17){
 		_points = [];
 		_points2 = [];
 		theta = 1;
 		theta2 = 1;
 	} else {
 		_points.push({x: Vector3.x, y: Vector3.y});
 	}

 	for(var i = 0; i < _points.length; i++){
 		stroke(130,220,170);
 		strokeWeight(2);
 		stroke(20,150,170);
 		point(_points[i].x,_points[i].y);
 	}
 	theta += 0.01;
 	theta2 += 0.02;
}
