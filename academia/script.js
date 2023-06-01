var leftValue = 200,
  topValue = 100;

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

	if (e.keyCode == 37) {
		// LEFT
		console.log("left")
		if (leftValue >= 0)
		{
			console.log("ingresa")
			leftValue = leftValue - 10;
		}

	} 
	else if (e.keyCode == 39) {
    // RIGHT
	if (leftValue <= 1080) {
			console.log("right")
			leftValue = leftValue + 10;
		} 
	}

	else if (e.keyCode == 40) {
    // DOWN
	if (topValue <= 1080) {
			console.log("down")
			topValue = topValue + 10;
		}
	}

	else if (e.keyCode ==38){
		if (topValue >= 0) {
			console.log("up")
			topValue = topValue - 10;
		}
	}

    console.log("final");
  // ...
	console.log("funcion")
	update();
	console.log("funcion2")
};
