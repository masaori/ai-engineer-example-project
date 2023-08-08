export const any = <T>(iterable: Iterable<T>, predict: (e: T, index: number) => boolean): boolean => {
  for (const [i, e] of Array.from(iterable).entries()) {
    if (predict(e, i)) {
      return true
    }
  }
  return false
}
