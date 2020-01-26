const $counterDiv = document.querySelector("#ex1Conteiner");
const $colorsDiv = document.querySelector("#colors");

$counterDiv.addEventListener("click", event => {
	switch(event.target.innerText) {
		case "+": {
			const $counterValueTag = event.target.parentElement.firstElementChild;
			let counterValue = parseInt($counterValueTag.innerHTML);
			$counterValueTag.innerHTML = ++counterValue;
			
			break; }
		case "-":
			{const $counterValueTag = event.target.parentElement.firstElementChild;
						let counterValue = parseInt($counterValueTag.innerHTML);
						$counterValueTag.innerHTML = --counterValue;}
	}
})

$colorsDiv.addEventListener("click", function (event) {
	const $currentColorDiv = event.target;
	if ($currentColorDiv === this) return;
	
	$currentColorDiv.remove();

	switch($currentColorDiv.style.backgroundColor) {
		case "blue":
			$currentColorDiv.style.backgroundColor = "green";
			break;
		case "green":
			$currentColorDiv.style.backgroundColor = "yellow";
			break;
		case "yellow":
		default:
			$currentColorDiv.style.backgroundColor = "blue";
			break;
	}

	this.append($currentColorDiv);
});