import { min } from './array.min';

describe('min function', () => {
  test('should return minimum number in the array', () => {
    const array: number[] = [5, 3, 4, 1, 2];
    const result = min(array, (element) => element);
    expect(result).toEqual(1);
  });

  test('should return undefined for an empty array', () => {
    const array: number[] = [];
    const result = min(array, (element) => element);
    expect(result).toBeUndefined();
  });

  test('should return minimum object based on the provided getValue function', () => {
    const array: { num: number }[] = [{ num: 5 }, { num: 3 }, { num: 4 }, { num: 1 }, { num: 2 }];
    const result = min(array, (element) => element.num);
    expect(result).toEqual({ num: 1 });
  });
});