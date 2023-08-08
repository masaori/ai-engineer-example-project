export const mapRepeated = <TResult>(count: number, map: (index: number) => TResult): TResult[] => {
  return Array.from({ length: count }).map((_, index) => map(index))
}
