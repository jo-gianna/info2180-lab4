window.onload = function(){
	//let boundary1 = document.getElementById("boundary1");
	//boundary1.onmouseover = red;

	let boundary = document.querySelectorAll("#maze .boundary");
	let hitBoundary = false;
	for (let i=0; i<boundary.length; i++){
		boundary[i].onmouseover = red;
	}

	let end = document.getElementById("end");

	end.onmouseover = popup;

	function red(){
		for (let i=0; i<boundary.length; i++){
			boundary[i].classList.add("youlose");
			hitBoundary = true;
		}
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
}