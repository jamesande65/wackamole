let inputs = document.querySelectorAll('input');
let submit = document.querySelector('.btn');
submit.addEventListener('click', gameBegin);


function gameBegin() {
	let value = 0;
	inputs.forEach((elem) => {
		if(elem.checked){
			value = elem.value;
		}
	});
	window.location = "game.html?value=" + value;
}