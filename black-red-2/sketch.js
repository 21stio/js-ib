function setup() {
    var cnv = createCanvas(1000, 1000);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
	background(255);
	stroke(33,150,243, 15);
}

function draw() {
	translate(width / 2, height / 2);
	//machine(frameCount * 1 * 0.009, Math.tan(frameCount * 1 * 0.01) * 150, 400);
    //translate(width / 2, 0);
    machine(frameCount * 1 * 0.009, Math.sin(frameCount * 1 * 0.01) * 150, 400);
}

function machine(rotation, radius, barLen) {
	push();
	rotate(rotation);
	translate(radius * Math.cos(rotation), radius * Math.sin(rotation))
	line(0, -barLen, 0, barLen);
	pop();
}
