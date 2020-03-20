import { admiralize } from './admiralize';
import { DEFAULT_NAME } from './constants';

describe('admiralize()', () => {
  test('When input is undefined or empty it should return default value', () => {
    expect(admiralize(null)).toEqual(DEFAULT_NAME);
    expect(admiralize('')).toEqual(DEFAULT_NAME);
  });

  test('When input ends with o,a,i,e,u should remove it in returned value and add "ow" suffix', () => {
    expect(admiralize('Duda')).toEqual('dudow');
    expect(admiralize('Kowalska')).toEqual('kowalskow');
  });

  test('When input ends other letter it should remove return input with "ow" suffix', () => {
    expect(admiralize('Wał')).toEqual('wałow');
    expect(admiralize('Suchar')).toEqual('sucharow');
  });
});
