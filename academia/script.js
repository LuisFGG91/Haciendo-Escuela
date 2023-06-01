var leftValue = 200,
  topValue = 100;

var imgVar = 1;

function update() {

	document.getElementById("character").style.left = leftValue + "px";
	document.getElementById("character").style.top = topValue + "px";

}

document.onkeydown = function (e) {
	console.log(e);
	console.log(e.key);
	console.log(e.keyCode);
	console.log("leftValue :" +		leftValue);
	console.log("topValue :" + topValue);

	if (imgVar == 1) {
		imgVar = 2;
	}
	else{
		imgVar = 1;
	}

	if (e.keyCode == 37) {
		// LEFT
		console.log("left")
		if (leftValue >= 0)
		{
			console.log("ingresa")
			leftValue = leftValue - 10;
			document.getElementById("character").style.backgroundImage = "url('img/left" + imgVar + ".png')";
		}

	} 
	else if (e.keyCode == 39) {
    // RIGHT
	if (leftValue <= 1080) {
			console.log("right")
			leftValue = leftValue + 10;
			document.getElementById("character").style.backgroundImage = "url('img/right" + imgVar + ".png')";
		} 
	}

	else if (e.keyCode == 40) {
    // DOWN
	if (topValue <= 1080) {
			console.log("down")
			topValue = topValue + 10;
			document.getElementById("character").style.backgroundImage = "url('img/down" + imgVar + ".png')";
		}
	}

	else if (e.keyCode ==38){
		if (topValue >= 0) { 
			console.log("up")
			topValue = topValue - 10;
			document.getElementById("character").style.backgroundImage = "url('img/top" + imgVar + ".png')";
		}
	}

    console.log("final");
  // ...
	console.log("funcion")
	update();
	console.log("funcion2")
};
