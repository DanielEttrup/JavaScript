function Grid(width,height,size){
	this.width = width;
	this.height = height;
	this.size = size;
	this.grid = [];
	this.cols = round(this.width/this.size)-1;
	this.rows = round(this.height/this.size)-1;

	this.setup = function(){

		this.grid = Create2DArray(this.cols);

		for(var x = 0; x < this.cols; x++){
			for(var y = 0; y < this.rows; y++){
				this.grid[x][y] = new Spot((x * this.size),(y * this.size),this.size);
			}
		}	
	}

	this.draw = function(){
		for(var x = 0; x < this.cols; x++){
			for(var y = 0; y < this.rows; y++){
				this.grid[x][y].render();
			}
		}
	}

	this.checkGrid = function(x,y,state){
		for(var k = 0; k < this.rows; k++){
			for(var j = 0; j < this.cols; j++){
				if(this.grid[k][j].checkIfPressed(x,y,state)){
					return true;
				}	
			}
		}
	}

	this.sortgrid = function(){
		for(var x = 0; x < this.rows; x++){
			this.sortColumn(this.grid[x]);
		}
	}


	this.sortColumn = function(array){
		for(var y = 0; y < array.length; y++){
			if((y != (array.length - 1)) && array[y].state != 0 && array[y+1].state == 0){
				array[y+1].state = array[y].state;
				array[y].state = 0;
				break;
			}
		} 
	}


	this.checkRowsForWinner = function(){
		var counter = 0;
		var previousState = 0;
		for(var y = 0; y < this.cols; y++){
			for(var x = 0; x < this.rows; x++){
				if(this.grid[x][y].state != 0){
					if(this.grid[x][y].state == previousState){
						counter ++;
					} else {
						counter = 0;
					}
				}
				if(counter >= wincount){
					return previousState;
				} 

				previousState = this.grid[x][y].state;
			}
			previousState = 0;
			counter = 0;
		}
		return 0;
	}


	this.checkColumnsForWinner = function(){
		var counter = 0;
		var previousState = 0;
		for(var x = 0; x < this.rows; x++){
			for(var y = 0; y < this.cols; y++){
				if(this.grid[x][y].state != 0){
					if(this.grid[x][y].state == previousState){
						counter ++;
					} else {
						counter = 0;
					}
				}
				if(counter >= wincount){
					return previousState;
				} 

				previousState = this.grid[x][y].state;
			}
			previousState = 0;
			counter = 0;
		}
		return 0;
	}
}
