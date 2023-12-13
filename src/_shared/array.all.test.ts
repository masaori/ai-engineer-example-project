import { all } from './array.all';

describe('Array All', () => {
  test('should return true if all elements satisfy the predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (e: number, index: number) => e > index;
    expect(all(array, predicate)).toBeTruthy();
  });

  test('should return false if any element does not satisfy the predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (e: number, index: number) => e < index;
    expect(all(array, predicate)).toBeFalsy();
  });
});