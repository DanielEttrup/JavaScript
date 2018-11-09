function setup() {
	Vector1 = createVector();
	Vector2 = createVector();
	createCanvas(400,400);

	background(0); 
	corrodinatSystem = new CorrodinatSystem(20,40);
}

function draw() {
	background(0); 
 	corrodinatSystem.Render();
 	translate(height/2,width/2);
}
