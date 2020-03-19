(() => {
	const input = document.querySelector('#name');
	const button = document.querySelector('#button');
	const output = document.querySelector('#output');
	const admiralize: (_: string) => string = (input: string) => {
		if (!input) {
			return 'pustakow';
		}

		let base: string = input.toLowerCase();
		if (/[aaeuio]$/.test(input.slice(-1))) {
			base = base.slice(0, -1);
		}
		return `${base}ow`;
	};


	const generate = () => output.innerHTML = admiralize((input as any).value);

	const init = () => button.addEventListener('click', generate);

	init();
})();