var displayNumber = 0;
var refresh = false;
function setup() {
	createCanvas(400,400);
	sevenSegmentDisplay = new SevenSegmentDisplay(100,200,30);
	sevenSegmentDisplay.setup();
	frameRate(2);
}

function draw() {
  	background(0);
	translate(80,80);
	if(refresh){
		sevenSegmentDisplay.setNum(10);
		refresh = false;
	} else {
		sevenSegmentDisplay.setNum(displayNumber);
		displayNumber += 1;
		if(displayNumber > 9){
			displayNumber = 0;
		}

		refresh = true;
	}
	sevenSegmentDisplay.drawSegmentDisplay();
}


