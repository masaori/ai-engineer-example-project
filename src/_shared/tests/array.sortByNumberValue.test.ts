import { sortByNumberValue } from '../array.sortByNumberValue';

describe('sortByNumberValue function', () => {
  test('should correctly sort in ascending order', () => {
    expect(sortByNumberValue(2, 1, 'asc')).toBe(1);
    expect(sortByNumberValue(1, 2, 'asc')).toBe(-1);
  });

  test('should correctly sort in descending order', () => {
    expect(sortByNumberValue(2, 1, 'desc')).toBe(-1);
    expect(sortByNumberValue(1, 2, 'desc')).toBe(1);
  });
});