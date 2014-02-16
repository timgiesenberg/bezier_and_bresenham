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
 * Zeichnet eine Bresenham Linie
 * Bitte beachten: Bei der Monitordarstellung befindet sich der Nullpunkt eines Koordinatensystems immer Links oben.
 */
function drawBresenham(){
	ctx.strokeStyle="orange";
	ctx.beginPath();
	
	//erzeugen der Punkte P1 und P2 als Vektoren
	var vektorPunkt1 = new vektor($("#p1x").val(), $("#p1y").val());
	var vektorPunkt2 = new vektor($("#p2x").val(), $("#p2y").val());
	
	ctx.moveTo(vektorPunkt1.x, vektorPunkt1.y);
	
	// f�r den delta Vektor die Operation manuell erledigen
	var deltax = vektorPunkt2.x - vektorPunkt1.x;
	var deltay = vektorPunkt2.y - vektorPunkt1.y;
	
	//delta Vektor erzeugen
	var delta = new vektor(deltax, deltay);
	
	var q = 2 + delta.y - delta.x;
	var qDown = 2 * delta.y;
	var qUp = 2 * (delta.y - delta.x);
		
	var pixelToSetY = new Number(vektorPunkt1.y);
	drawPoint(vektorPunkt1, "P1");
	drawPoint(vektorPunkt2, "P2");
	
	for(var pixelToSetX = new Number(vektorPunkt1.x); pixelToSetX <= vektorPunkt2.x; pixelToSetX++){
        ctx.lineTo(pixelToSetX, pixelToSetY);
        ctx.stroke();
        if (q < 0) {
            //y =y
            q += qDown;
        }
        else {
            // y++
            pixelToSetY++;
            q += qUp;
        }
    }
    /**/
	ctx.closePath();
}