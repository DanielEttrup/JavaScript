class Ball {
	
	constructor(mass){
		this.location = new createVector(width/2,height/2);
		this.velocity = new createVector(0,0);
		this.acceleration = new createVector(0,0);
		this.mass = mass;
	}

	update(){
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
	}
	gravity(x,y){
		var gravityVector = new createVector(x,y);
		gravityVector.sub(this.location);
		gravityVector.setMag(0.08);
		this.acceleration = (gravityVector);
	}
	addForce(x,y){
		var forceVector = new createVector(x,y);
		this.velocity.add(forceVector);
	}

}			