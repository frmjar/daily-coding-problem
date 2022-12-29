const subMax = (arr, n) => {
  const partialMax = []
  const solution = []
  const isEmpty = (arr) => {
    return arr.length === 0
  }
  for (let i = 0; i < arr.length; i++) {
    if (!isEmpty(partialMax) && partialMax[0] < i - n + 1) {
      partialMax.shift()
    }
    while (!isEmpty(partialMax) && arr[partialMax[partialMax.length - 1]] < arr[i]) {
      partialMax.pop()
    }
    partialMax.push(i)
    if (i >= n - 1) {
      solution.push(arr[partialMax[0]])
    }
  }
  return solution
}
console.log(subMax([10, 5, 2, 7, 8, 7], 3))
