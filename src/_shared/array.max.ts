import { sortByNumberValue } from './array.sortByNumberValue';

export const max = <T>(array: T[], getValue: (element: T) => number): T | undefined => {
  if (array.length === 0) {
    return undefined
  }
  const sorted = array.sort((a, b) => sortByNumberValue(getValue(a), getValue(b), 'desc'));
  return sorted[0];
}
