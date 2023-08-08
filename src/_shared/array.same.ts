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
