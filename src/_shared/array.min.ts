import { sortByNumberValue } from './array.sortByNumberValue';

export const min = <T>(array: T[], getValue: (element: T) => number): T | undefined => {
  if (array.length === 0) {
    return undefined
  }
  const sorted = array.sort((a, b) => sortByNumberValue(getValue(a), getValue(b), 'asc'));
  return sorted[0];
}
