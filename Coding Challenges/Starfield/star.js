class star {

	constructor(x,y){
		this.x = x;
		this.y = y;
		this.z = 1;
	}

	update(){
		this.z += speed
	}
	show(color){
		stroke(color);
		point(this.x*this.z,this.y*this.z);
		strokeWeight(this.z);
	}
}