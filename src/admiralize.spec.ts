import { admiralize } from './admiralize';
import { DEFAULT_NAME } from './constants';

describe('admiralize()', () => {
	test('When input is undefined or empty it should return default value', () => {
		expect(admiralize(null)).toEqual(DEFAULT_NAME);
		expect(admiralize('')).toEqual(DEFAULT_NAME);
	});
})
