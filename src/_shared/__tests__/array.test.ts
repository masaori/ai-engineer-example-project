import * as array from '../array';

describe('excludeNull', () => {
  it('should return an array without null or undefined values', () => {
    const input = [1, null, 2, undefined, 3];
    const expected = [1, 2, 3];
    expect(array.excludeNull(input)).toEqual(expected);
  });
});