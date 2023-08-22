import { min } from './array.min';

describe('min', () => {
  test('should return undefined for an empty array', () => {
    expect(min([], (element) => element)).toBeUndefined();
  });

  test('should return the only element for an array of one element', () => {
    expect(min([7], (element) => element)).toBe(7);
  });

  test('should return the smallest element for an array of multiple elements', () => {
    expect(min([7, 3, 5], (element) => element)).toBe(3);
  });

  test('should return the smallest element for an array with duplicate values', () => {
    expect(min([7, 3, 5, 3], (element) => element)).toBe(3);
  });

  test('should return the smallest element for an array with negative values', () => {
    expect(min([7, -3, 5, 3], (element) => element)).toBe(-3);
  });
});