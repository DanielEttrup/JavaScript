var b;

function setup() {
	createCanvas(400,400);
	b = new Ball(18);
}

function draw() {
	background(51);
	b.update()
	b.gravity(width/2, height/2);
	fill(255);
	ellipse(b.location.x, b.location.y, b.mass, b.mass);

	fill(255,0,0);
	ellipse(width/2, height/2, 8,8);
}

function mousePressed(){
	//var dist = Math.sqrt((Math.abs(x-mouseX)^2) + (Math.abs(y-mouseY)^2));
	//console.log(dist);
}