function setup() {
	Vector1 = createVector();
	Vector2 = createVector();
	createCanvas(400,400);

	background(0); 
	corrodinatSystem = new CorrodinatSystem(40, 0, 400, 400);
}

function draw() {
	background(51); 
 	corrodinatSystem.render();
 	stroke(255,0,0);
 	strokeWeight(10);
 	corrodinatSystem.renderPoints();

}
function mousePressed(){
	corrodinatSystem.addVector({x: mouseX, y: mouseY});
}