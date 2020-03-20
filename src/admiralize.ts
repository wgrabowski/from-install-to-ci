import { DEFAULT_NAME } from './constants';
export const admiralize: (_: string) => string = (input: string) => {
	if (!input) {
		return DEFAULT_NAME;
	}

	let base: string = input.toLowerCase();
	if (/[aaeuio]$/.test(input.slice(-1))) {
		base = base.slice(0, -1);
	}
	return `${base}ow`;
};