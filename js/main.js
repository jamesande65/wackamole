let inputs = document.querySelectorAll('input');
let submit = document.querySelector('.btn');
submit.addEventListener('click', gameBegin);


function gameBegin(value) {
	inputs.forEach((elem) => {
		let value = 0;
		if(elem.checked){
			value = elem.value;
			console.log(value);
			//gameBegin(value);
		}
	});
}