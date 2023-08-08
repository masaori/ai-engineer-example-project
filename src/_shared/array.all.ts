export const all = <T>(iterable: Iterable<T>, predict: (e: T, index: number) => boolean): boolean => {
  return Array.from(iterable).reduce<boolean>((prev, e, i) => prev && predict(e, i), true)
}
