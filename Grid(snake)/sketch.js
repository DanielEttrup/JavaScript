var _size = 25;
var grid = [];
var diraction = 0;
var foodX = 20;
var foodY = 20;
var Eaten = false;
var body = [];

var cell = {
	x:10,
	y:10
}

function setup() {
  	createCanvas(750,750);
	frameRate(5)  
	body.push(cell);
	foodX = floor(random(_size-1));
	foodY = floor(random(_size-1));
  for(var y = 0; y < _size; y++){
  		grid[y] = [];
  		for(var x = 0; x < _size; x++){
  			grid[y][x] = 0;
  		} 
  }
}

function draw() {
	fill(51);

  	for(var y = 0; y < _size; y++){
  		for(var x = 0; x < _size; x++)
  			{
  				rect(x*_size, y*_size,_size,_size);	
  			}
  	}	

  	fill(255,0,0);
  	for (var i = 0; i < body.length; i++) {
  		rect(body[i].x*_size,body[i].y*_size,_size,_size);
  	}

  	fill(0,255,0);
  	rect(foodX*_size,foodY*_size,_size,_size);
  	Movement();
	eatFood();
}
function keyPressed() {

  		if(keyCode === UP_ARROW)
  			diraction = 0;
		if(keyCode === DOWN_ARROW)
			diraction = 1;	
		if(keyCode === LEFT_ARROW)
			diraction = 2;
  		if(keyCode === RIGHT_ARROW)
  			diraction = 3;

}
function Movement(){
	if(diraction == 0)
		  	if(body[0].y == 0){
  				body[0].y = _size-1;
  			} else {
  			body[0].y-= 1;
  			}
  	 else if(diraction == 1)
			if(body[0].y == _size-1){
				body[0].y = 0;
			} else {
			body[0].y += 1;
			}
	 else if(diraction == 2)
		  	if(body[0].x == 0){
  				body[0].x = _size-1;
  			} else {
  			body[0].x -= 1;
  			}
	 else if(diraction == 3)
			if(body[0].x == _size-1){
				body[0].x = 0;
			} else {
			body[0].x += 1;
			}
	
}
function spawnFood(){
	foodX = floor(random(_size-1));
	foodY = floor(random(_size-1));
}

function eatFood(){
	if (body[0].y == foodY && body[0].x == foodX){
	addtail();
  	spawnFood();
  	console.log("Eaten!");
	}
}

function addtail(){
	var _cell = cell;

	 _cell = body[0];
	if(diraction == 0){

  			_cell.y-= 1;

		}
  	 else if(diraction == 1){

			_cell.y += 1;			

		}	
	 else if(diraction == 2){

  			_cell.x -= 1;

  		}	
	 else if(diraction == 3){

			_cell.x += 1;

		}
	body.push(_cell);
}
//			rect(X,Y,50,50);
