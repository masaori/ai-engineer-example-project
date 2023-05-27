export const excludeNull = <T>(array: (T | null | undefined)[]): T[] => {
  return array.filter((e: T | null | undefined): e is T => !!e)
}

export const all = <T>(iterable: Iterable<T>, predict: (e: T, index: number) => boolean): boolean => {
  return Array.from(iterable).reduce<boolean>((prev, e, i) => prev && predict(e, i), true)
}

export const any = <T>(iterable: Iterable<T>, predict: (e: T, index: number) => boolean): boolean => {
  for (const [i, e] of Array.from(iterable).entries()) {
    if (predict(e, i)) {
      return true
    }
  }
  return false
}

export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array))
}

const sortByComparableValue = <T>(a: T, b: T, order: 'asc' | 'desc') => {
  if (a > b) {
    return order === 'asc' ? 1 : -1
  }
  if (a < b) {
    return order === 'asc' ? -1 : 1
  }
  return 0
}

export const sortByStringValue = (a: string, b: string, order: 'asc' | 'desc') => sortByComparableValue(a, b, order)
export const sortByNumberValue = (a: number, b: number, order: 'asc' | 'desc') => sortByComparableValue(a, b, order)
export const sortByBooleanValue = (a: boolean, b: boolean, order: 'asc' | 'desc') => {
  if (!a && b) {
    return order === 'asc' ? 1 : -1
  }
  if (a && !b) {
    return order === 'asc' ? -1 : 1
  }
  return 0
}

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

export const min = <T>(array: T[], getValue: (element: T) => number): T | undefined => {
  if (array.length === 0) {
    return undefined
  }
  const sorted = array.sort((a, b) => sortByNumberValue(getValue(a), getValue(b), 'asc'))
  return sorted[0]
}

export const max = <T>(array: T[], getValue: (element: T) => number): T | undefined => {
  if (array.length === 0) {
    return undefined
  }
  const sorted = array.sort((a, b) => sortByNumberValue(getValue(a), getValue(b), 'desc'))
  return sorted[0]
}

export const count = <T>(array: T[], predict: (element: T) => boolean): number => {
  return array.reduce((prev, element) => (predict(element) ? prev + 1 : prev), 0)
}

export const findNext = <T>(
  element: T,
  array: T[],
  getOrderIndex: (element: T) => number,
  comparison?: (a: T, b: T) => boolean,
): T | undefined => {
  const sorted = array.sort((a, b) => sortByNumberValue(getOrderIndex(a), getOrderIndex(b), 'asc'))
  const elementIndex = sorted.findIndex((e) => (comparison ? comparison(e, element) : e === element))
  if (elementIndex < 0) {
    return undefined
  }
  return sorted[elementIndex + 1]
}

export const same = <T>(arrayA: T[], arrayB: T[], comparison?: (a: T, b: T) => boolean): boolean => {
  if (arrayA.length !== arrayB.length) {
    return false
  }
  for (const [index, a] of arrayA.entries()) {
    const b = arrayB[index]
    if (comparison ? !comparison(a, b) : a !== b) {
      return false
    }
  }
  return true
}

export const mapObject = <TSource, TTarget>(
  source: TSource | null | undefined,
  map: (source: TSource) => TTarget,
): TTarget | null => {
  if (!source) {
    return null
  }
  return map(source)
}

export const mapRepeated = <TResult>(count: number, map: (index: number) => TResult): TResult[] => {
  return Array.from({ length: count }).map((_, index) => map(index))
}
