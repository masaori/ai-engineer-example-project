import { all } from './array.all';
import { any } from './array.any';

export const areArraysEqual = <T>(a: T[], b: T[], ignoreOrder: boolean) => {
  if (a.length !== b.length) {
    return false
  }
  if (ignoreOrder) {
    return all(a, (e) => any(b, (target) => e === target))
  } else {
    return all(a, (source, index) => source === b[index])
  }
}
