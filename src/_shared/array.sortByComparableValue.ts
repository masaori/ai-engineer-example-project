const sortByComparableValue = <T>(a: T, b: T, order: 'asc' | 'desc') => {
  if (a > b) {
    return order === 'asc' ? 1 : -1
  }
  if (a < b) {
    return order === 'asc' ? -1 : 1
  }
  return 0
}

export default sortByComparableValue;
