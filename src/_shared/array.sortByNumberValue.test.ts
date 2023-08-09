import sortByComparableValue from './array.sortByComparableValue';

describe('sortByComparableValue', () => {
  test('should sort numbers in ascending order', () => {
    expect(sortByComparableValue(2, 1, 'asc')).toBe(1);
    expect(sortByComparableValue(1, 2, 'asc')).toBe(-1);
    expect(sortByComparableValue(1, 1, 'asc')).toBe(0);
  });

  test('should sort numbers in descending order', () => {
    expect(sortByComparableValue(2, 1, 'desc')).toBe(-1);
    expect(sortByComparableValue(1, 2, 'desc')).toBe(1);
    expect(sortByComparableValue(1, 1, 'desc')).toBe(0);
  });
});