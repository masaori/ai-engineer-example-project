import sortByComparableValue from './array.sortByComparableValue';

export const sortByBooleanValue = (a: boolean, b: boolean, order: 'asc' | 'desc') => {
  if (!a && b) {
    return order === 'asc' ? 1 : -1
  }
  if (a && !b) {
    return order === 'asc' ? -1 : 1
  }
  return 0
}
