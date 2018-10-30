var game_state =1;
var size = 50;
var speed = 4;
var wincount = 3;

var grid;

function setup() {
	createCanvas(400,400);
	game_state = 1;
	size = 50;
	grid = new Grid(width,height,size);
	grid.setup();

}

function draw() {
	background(51);
	translate(size,size);

	grid.draw();
	if((frameCount % speed) == 0){
		grid.sortgrid();
	}
if(grid.checkRowsForWinner()){
	console.log(`${game_state} is the winner!`);
}
if(grid.checkColumnsForWinner()){
	console.log(`${game_state} is the winner!`);
}

}

function mousePressed(){
	if(grid.checkGrid(mouseX-size, mouseY-size, game_state)){
		game_state = (game_state === Player1) ? game_state = Player2 : game_state = Player1;
	}
}
