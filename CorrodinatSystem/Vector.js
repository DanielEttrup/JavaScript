class Vector {
	constructor(orginPos, pos){
		this.orginPos = orginPos,
		this.Pos = pos;
	}
}

function AddPoints(pos1, pos2){
		var _pos;
		_pos.x = pos1.x + pos2.x;
		_pos.y = pos1.y + pos2.y;
		return pos;
}

function scalePoint(pos, scale){
		var _pos;
		_pos.x = pos.x * scale;
		_pos.y = pos.y * scale;
		return pos;
}	

var pos = {
	x: 0,
	y: 0
}