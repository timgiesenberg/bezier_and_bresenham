/**
 * @author TimGiesenberg
 */

/**
 * 
 * @param {type} x
 * @param {type} y
 * @returns {vektor}
 */
function vektor(x,y) {
	this.y = y;
	this.x = x;
}

/**
 * invoked on button hit
 * @returns {undefined}
 */
function drawBezier(){
	var P1 = new vektor($("#p1x").val(), $("#p1y").val());
	var P2 = new vektor($("#p2x").val(), $("#p2y").val());
	var P3 = new vektor($("#p3x").val(), $("#p3y").val());
	var P4 = new vektor($("#p4x").val(), $("#p4y").val());
	
	drawPoint(P1, "P1");
	drawPoint(P2, "P2");
	drawPoint(P3, "P3");
	drawPoint(P4, "P4");

	ctx.beginPath();
	ctx.strokeStyle="blue";
	ctx.moveTo(P1.x, P1.y);
	
	for (var t = 0.000; t <= 1.000; t += 0.001) {
		
		//aus 4 punkten 3 punkte finden
		var R1 = linearInterpolate(P1, P2, t);
		var R2 = linearInterpolate(P2, P3, t);
		var R3 = linearInterpolate(P3, P4, t);
		
		var S1 = linearInterpolate(R1, R2, t);
		var S2 = linearInterpolate(R2, R3, t);
		
		var curvePoint = linearInterpolate(S1, S2, t);
		
		ctx.lineTo(curvePoint.x, curvePoint.y);
		
	}
	ctx.moveTo(0, 0);
	ctx.stroke();
	ctx.closePath();
}

function linearInterpolate(P1, P2, t){
	var x = P1.x * (1-t) + P2.x * t;
	var y = P1.y * (1-t) + P2.y * t;
	
	var point = new vektor(x, y);
	return point;
}


function connectLines(){
	ctx.beginPath();
	ctx.strokeStyle="red";
	
	ctx.moveTo($("#p1x").val(), $("#p1y").val());
	ctx.lineTo($("#p2x").val(), $("#p2y").val());
	ctx.lineTo($("#p3x").val(), $("#p3y").val());
	ctx.lineTo($("#p4x").val(), $("#p4y").val());
	ctx.stroke();
	ctx.moveTo(0, 0);
	ctx.closePath();
}

/**
 * 
 * @param {type} P
 * @param {type} Name
 * @returns {undefined}
 */
function drawPoint(P, Name){

	var x = P.x;
	var y = P.y;

	ctx.beginPath();
	ctx.fillStyle = "green";
	ctx.arc(P.x,P.y ,10,0*Math.PI,2*Math.PI);
	ctx.fill();
	//ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.font="16px sans-serif";
	ctx.fillText(Name,x,y);
	ctx.closePath();
}