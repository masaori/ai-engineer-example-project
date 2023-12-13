import { min } from './array.min';

describe('min', () => {
  test('should return the minimum number in an array', () => {
    const array = [5, 2, 8, 1, 3];
    const result = min(array, num => num);
    expect(result).toEqual(1);
  });

  test('should return undefined for an empty array', () => {
    const array: number[] = [];
    const result = min(array, num => num);
    expect(result).toEqual(undefined);
  });

  test('should return the minimum string in an array', () => {
    const array = ['apple', 'banana', 'cherry'];
    const result = min(array, str => str.length);
    expect(result).toEqual('apple');
  });
});