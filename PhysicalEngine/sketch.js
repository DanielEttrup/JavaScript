// TODO:
//	Fjern checkEgdes, det skal laves således at det er et andet obecjt den støder på.
//
//
//
//
//
//
//
//
//

var b = [];
var slope;
var gravity;
var IsbeingAplliedFriction;

function setup() {
	createCanvas(400,400);
	b[0] = new PhysicalObject(1, 200, 200);
}

function draw() {
	background(51);

	gravity = createVector(0,0.2);



	stroke(0)
	for(var i = b.length-1; i >= 0; i--){

		b[i].applyForce(gravity);

		if(mouseIsPressed){
				if(mouseX > width/2){
					wind = createVector(0.2,0);
				} else {
					wind = createVector(-0.2,0);
				}
			b[i].applyForce(wind);
		}

		if(b[i].location.x > 300 && b[i].location.x < 320){
			IsbeingAplliedFriction = true;
			var friction = b[i].applyFriction(0.9);
			
		} else if (b[i].location.x > 80 && b[i].location.x < 120) {
			IsbeingAplliedFriction = true;
			var friction = b[i].applyFriction(0.001);
			
		} else {
			IsbeingAplliedFriction = false;
		}

		b[i].update();
		b[i].checkEgdes();

		if(IsbeingAplliedFriction){
			fill(0,255,0,80);
		} else {
			fill(255);	
		}
		ellipse(b[i].location.x, b[i].location.y, (b[i].mass*20),(b[i].mass*20))
	}

	fill(150);
	rect(0,300,width,10);


	stroke(200,200,200,50);
	line(0,height/2,width,height/2);
	line(width/2,0,width/2,height);

	stroke(255,0,0,80);
	line(80,0,80,height); 	// line 1
	line(120,0,120,height); // line 2

	stroke(0,0,255,80);
	line(300,0,300,height); // line 3
	line(320,0,320,height); // line 4
	fill(255,0,0);
	ellipse(200, 200, 8,8);
}

function mousePressed(){
	//var NewPhysicalObject = new PhysicalObject(random(0.2,0.8),mouseX,mouseY);
	//b.push(NewPhysicalObject);
}



