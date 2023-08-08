import { sortByNumberValue } from './array.sortByNumberValue';

describe('sortByNumberValue', () => {
    test('it should sort an array of numbers in ascending order', () => {
        const array = [3, 1, 2];
        const sortedArray = sortByNumberValue(array);
        expect(sortedArray).toEqual([1, 2, 3]);
    });
    test('it should sort an array of numbers in descending order', () => {
        const array = [1, 3, 2];
        const sortedArray = sortByNumberValue(array, 'desc');
        expect(sortedArray).toEqual([3, 2, 1]);
    });
    test('it should return the same array if the array is already sorted', () => {
        const array = [1, 2, 3];
        const sortedArray = sortByNumberValue(array);
        expect(sortedArray).toEqual(array);
    });
    test('it should return an empty array if the input array is empty', () => {
        const array: number[] = [];
        const sortedArray = sortByNumberValue(array);
        expect(sortedArray).toEqual([]);
    });
});