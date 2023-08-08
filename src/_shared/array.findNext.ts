import { sortByNumberValue } from './array.sortByNumberValue';

export const findNext = <T>(
  element: T,
  array: T[],
  getOrderIndex: (element: T) => number,
  comparison?: (a: T, b: T) => boolean,
): T | undefined => {
  const sorted = array.sort((a, b) => sortByNumberValue(getOrderIndex(a), getOrderIndex(b), 'asc'));
  const elementIndex = sorted.findIndex((e) => (comparison ? comparison(e, element) : e === element));
  if (elementIndex < 0) {
    return undefined;
  }
  return sorted[elementIndex + 1];
}
