function setup() {
    var cnv = createCanvas(2000, 2000);
    var x = (windowWidth - width) / 2 ;
    var y = (windowHeight - height) / 2 + 100;
    cnv.position(x, y);
	background(0);
}


var cr_stop = 80;

function draw() {
	translate(width / 2, height / 2);
	//machine(frameCount * 1 * 0.009, Math.tan(frameCount * 1 * 0.01) * 150, 400);
    //translate(width / 2, 0);
	var c = frameCount;

	var b = 50;

    // if (frameCount > b){
    //     var diff = frameCount - b;
		// var acceleration = 1;
		// if(diff < 100) {
    //         acceleration = 0.01 * diff;
		// }
    //
    //     c = c - 0.4 * acceleration * diff
    // }

    var cr = c;
    var draw_c = c;


    if (frameCount > cr_stop){
        cr = cr_stop;
        draw_c = draw_c + 70;
    } else {
        stroke(41,98,255, c);
    }

    if (frameCount > cr_stop + 20){
        stroke(41,98,255, 100);
    }

    var draw_stop = 480;
    if (draw_c > draw_stop){
        draw_c = draw_stop
    }

    machine(cr * 1 * 0.009 + 1.56, Math.sin(draw_c * 1 * 0.01) * 150, 1500);
}

var max = 0;
function machine(rotation, radius, barLen) {
	push();
	rotate(-rotation);

	if (frameCount > cr_stop) {
        translate(83, 0);
	}

    var x = (radius * Math.cos(rotation) * 3)
    var weight = 3;
    if (x < max) {
	    max = x;
    }
    if (x > max) {
        weight = 10;
    }

	translate((radius * Math.cos(rotation) * 3), (radius * Math.sin(rotation) * weight))
	line(0, -barLen, 0, barLen);
    line(0, -1000, 0, 1000);


	pop();
}
