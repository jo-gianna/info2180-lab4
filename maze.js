window.onload = function(){
	//let boundary1 = document.getElementById("boundary1");
	//boundary1.onmouseover = red;

	let boundary = document.querySelectorAll("#maze .boundary");
	let hitBoundary = false;
	for (let i=0; i<boundary.length; i++){
		boundary[i].onmouseover = red;
	}

	let end = document.getElementById("end");
	let start = document.getElementById("start");

	end.onmouseover = popup;
	start.onclick = reset;

	function red(){
		for (let i=0; i<boundary.length; i++){
			boundary[i].classList.add("youlose");
		}
		hitBoundary = true;
		//boundary1.setAttribute("class", "boundary youlose");
		//boundary1.classList.add("youlose");
	}
	function popup(){
		if(hitBoundary==true){
			alert("You Lose!");
		}else{
			alert("You Win!");
		}
	}
	function reset(){
		for (let i=0; i<boundary.length; i++){
			boundary[i].classList.remove("youlose");
		}
		hitBoundary = false;
	}
}