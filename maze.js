window.onload = function(){
	let boundary1 = document.getElementById("boundary1");
	boundary1.onmouseover = red;

	function red(){
		
		//boundary1.setAttribute("class", "boundary youlose");
		boundary1.classList.add("youlose");
	}
	
}