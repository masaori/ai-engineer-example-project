export const count = <T>(array: T[], predict: (element: T) => boolean): number => {
  return array.reduce((prev, element) => (predict(element) ? prev + 1 : prev), 0)
}
