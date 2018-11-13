// F_friction = -1 * mew * |n| * vel(unit)
// F_gravity = m1 * m2 / dist 
// v1.0
class PhysicalObject {
	
	constructor(mass, x, y){
		this.location = new createVector(x,y);
		this.velocity = new createVector(0,0);
		this.acceleration = new createVector(0,0);
		this.mass = mass;
		this.friction = 0.001;
	}

	update(){
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
		//
		this.acceleration.mult(0);
	}
	applyForce(force){
		var _force = new createVector(force.x, force.y);
		_force.div(this.mass);
		this.acceleration.add(_force);
	} 

	applyFriction(coEfficientOfFriction){
		// without normal force 
		// need more calculation for the mew 
		var friction = new createVector(this.velocity.x, this.velocity.y);
		friction.normalize();
		friction.mult(-1);
		friction.mult(coEfficientOfFriction);
		// if added can change dir 
		this.acceleration.add(friction);
	}

	checkEgdes(){
		// 
		if(this.location.x > width){
			this.location.x = width;
			this.velocity.x *= -1;
		}else if(this.location.x < 0){
			this.location.x = 0;
			this.velocity.x *= -1;
		}else if(this.location.y > 300-(this.mass*20)/2){
			this.location.y = 300-(this.mass*20)/2;
			this.velocity.y = 0;
		}else if(this.location.y < 0){
			this.location.y = 0;
			this.velocity.y *= -1;
		}
	}

	addGravitationalAttraction(PhysicalObject, Gravity){
		// add y location check
		// not working as intented 
		var dist = getCartesianHypotenusen(Math.abs(this.location.x - PhysicalObject.location.x), Math.abs(this.location.y - PhysicalObject.location.y));
		if(dist !== 0 || dist !== null || dist !== undefined){
			var pheta = (this.location.y / dist);
		}
		var newH = ((this.mass * PhysicalObject.mass)*Gravity)/dist;
		var newY = (pheta/newH);
		var newX = Math.sqrt(newH^2-newY^2);
		var AttractionVector = createVector(newX, newY);
		this.applyForce(AttractionVector);
	}

}			