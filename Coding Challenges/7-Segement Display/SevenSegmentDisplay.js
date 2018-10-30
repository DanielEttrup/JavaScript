class SevenSegmentDisplay {	
		constructor(_length, _height,_ration){
			this._height = _height;
			this._length = _length;
			this._diodes = [];
			this._ration = _ration;
		}

		addDiode(x,y,__length, __height){
			var diode = new Diode(x,y,__length,__height);
			this._diodes.push(diode);
		}

		setup(){

	//		      0
	//		+------------+
		
	//		+3          4+
	//		+            +
	//		      1
	//		+------------+
		
	//		+5          6+
	//		+            +
    //			  2
	//		+------------+
			// addDiode(x,y,length, height){
			// horisontalt 1,2,3
			this.addDiode(0,										0,												this._length,					this._height/this._ration)
			this.addDiode(0,										this._height/2,									this._length,					this._height/this._ration)
			this.addDiode(0,										this._height-this._height/this._ration,			this._length,					this._height/this._ration)
			// vertical 4,5							
			this.addDiode(0,										this._height/this._ration,						this._height/this._ration,		this._length- this._height/this._ration)
			this.addDiode(this._length-this._height/this._ration,	this._height/this._ration,						this._height/this._ration,		this._length- this._height/this._ration)
			// vertical 6,7 		
			this.addDiode(0,										this._height/2+ this._height/this._ration,		this._height/this._ration,		this._length- this._height/this._ration*2)
			this.addDiode(this._length-this._height/this._ration,	this._height/2+ this._height/this._ration,		this._height/this._ration,		this._length- this._height/this._ration*2)
		}
		drawSegmentDisplay(){
			for (var i = 0; i < this._diodes.length; i++) {
				if(this._diodes[i].state){
					fill(50,180,50); 
				} else {
				    fill(51);
				}
				rect(this._diodes[i].x,this._diodes[i].y,this._diodes[i]._length,this._diodes[i]._width,8);
			}
		}

		setNum(num){
	//		      0
	//		+------------+
		
	//		+3          4+
	//		+            +
	//		      1
	//		+------------+
		
	//		+5          6+
	//		+            +
    //			  2
	//		+------------+
			switch(num){
				case 0:
					this._diodes[0].state = true;
					this._diodes[2].state = true;
					this._diodes[3].state = true;
					this._diodes[4].state = true;
					this._diodes[5].state = true;
					this._diodes[6].state = true;
				case 1:
					this._diodes[4].state = true;
					this._diodes[6].state = true;
					break;
				case 2:
					this._diodes[0].state = true;
					this._diodes[1].state = true;
					this._diodes[2].state = true;
					this._diodes[4].state = true;
					this._diodes[5].state = true;
					break;
				case 3:
					this._diodes[0].state = true;
					this._diodes[1].state = true;
					this._diodes[2].state = true;
					this._diodes[4].state = true;
					this._diodes[6].state = true;
					break;
				case 4:
					this._diodes[1].state = true;
					this._diodes[3].state = true;
					this._diodes[4].state = true;
					this._diodes[6].state = true;
					break;
				case 5:
					this._diodes[0].state = true;
					this._diodes[1].state = true;
					this._diodes[2].state = true;
					this._diodes[3].state = true;
					this._diodes[6].state = true;
					break;
				case 6:
					this._diodes[0].state = true;
					this._diodes[1].state = true;
					this._diodes[2].state = true;
					this._diodes[3].state = true;
					this._diodes[5].state = true;
					this._diodes[6].state = true;
					break;
				case 7:
					this._diodes[0].state = true;
					this._diodes[4].state = true;
					this._diodes[6].state = true;
					break;
				case 8:
					for (var i = 0; i < this._diodes.length; i++) {
						this._diodes[i].state = true;
					}
					break;
				case 9:
					for (var i = 0; i < this._diodes.length; i++) {
						this._diodes[i].state = true;
					}
						this._diodes[5].state = false;
					break;
				default:
					for (var i = 0; i < this._diodes.length; i++) {
						this._diodes[i].state = false;
					}
			}
		}


}
class Diode {
	constructor(x,y,_length,_width){
		this.x = x;
		this.y = y;
		this._length = _length;
		this._width = _width;
		this.state = false;
	}
}
