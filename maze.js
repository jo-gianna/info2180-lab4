window.onload = function(){
	//let boundary1 = document.getElementById("boundary1");
	//boundary1.onmouseover = red;

	let boundary = document.querySelectorAll("#maze .boundary");
	for (let i=0; i<boundary.length; i++){
		boundary[i].onmouseover = red;
	}

	function red(){
		for (let i=0; i<boundary.length; i++){
			boundary[i].classList.add("youlose");
		}
		//boundary1.setAttribute("class", "boundary youlose");
		//boundary1.classList.add("youlose");
	}
	
}