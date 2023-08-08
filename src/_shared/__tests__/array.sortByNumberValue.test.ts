import { sortByNumberValue } from '../array.sortByNumberValue';

describe('sortByNumberValue', () => {
    test('sorts array in ascending order', () => {
        const array = [3, 1, 2];
        const expected = [1, 2, 3];
        array.sort((a, b) => sortByNumberValue(a, b, 'asc'));
        expect(array).toEqual(expected);
    });

    test('sorts array in descending order', () => {
        const array = [3, 1, 2];
        const expected = [3, 2, 1];
        array.sort((a, b) => sortByNumberValue(a, b, 'desc'));
        expect(array).toEqual(expected);
    });
});