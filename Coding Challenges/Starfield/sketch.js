var Stars = [];
var speed = 0.01;
function setup() {
	createCanvas(400,400);
	for(var i = 0; i < 150; i++){
 		Stars[i] = new star(random(-width,width),random(-height,height));
	}
}

function draw() {
  background(51);
 	translate(width/2,height/2);

	for(var i = 0; i < Stars.length; i++){
		if(i = 2){
		Stars[i].update();
		Stars[i].show(0);	
		} else {
		Stars[i].update();
		Stars[i].show(255);
		}
	}

}