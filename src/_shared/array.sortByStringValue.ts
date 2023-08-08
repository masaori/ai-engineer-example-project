import sortByComparableValue from './array.sortByComparableValue';

export const sortByStringValue = (a: string, b: string, order: 'asc' | 'desc') => sortByComparableValue(a, b, order);
