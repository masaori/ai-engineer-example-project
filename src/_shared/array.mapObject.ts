export const mapObject = <TSource, TTarget>(
  source: TSource | null | undefined,
  map: (source: TSource) => TTarget,
): TTarget | null => {
  if (!source) {
    return null
  }
  return map(source)
}
