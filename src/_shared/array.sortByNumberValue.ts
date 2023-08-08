import sortByComparableValue from './array.sortByComparableValue';

export const sortByNumberValue = (a: number, b: number, order: 'asc' | 'desc') => sortByComparableValue(a, b, order);
