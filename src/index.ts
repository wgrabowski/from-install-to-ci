import { admiralize } from './admiralize';

(() => {
	const input = document.querySelector('#name');
	const button = document.querySelector('#button');
	const output = document.querySelector('#output');



	const generate = () => output.innerHTML = admiralize((input as any).value);

	const init = () => button.addEventListener('click', generate);

	init();
})();