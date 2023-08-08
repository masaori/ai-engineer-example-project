import { sortByNumberValue } from './array.sortByNumberValue';

describe('sortByNumberValue', () => {
    test('should sort numbers in ascending order', () => {
        const result = [3, 1, 2].sort((a, b) => sortByNumberValue(a, b, 'asc'));
        expect(result).toEqual([1, 2, 3]);
    });

    test('should sort numbers in descending order', () => {
        const result = [3, 1, 2].sort((a, b) => sortByNumberValue(a, b, 'desc'));
        expect(result).toEqual([3, 2, 1]);
    });
});