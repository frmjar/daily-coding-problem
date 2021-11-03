// With division
function productOfArray (arr: number[]): number[] {
  const mult = arr.reduce((acc, curr) => acc * curr, 1)
  return arr.map(x => mult / x)
}

// Without division
function productOfArray2 (arr: number[]): number[] {
  const productRight: number[] = []
  const productLeft: number[] = []

  let aux = 1
  arr.forEach((x: number, i: number) => {
    if (i !== 0) {
      aux *= arr[i - 1]
    }
    productLeft.push(aux)
  })

  const len = arr.length - 1
  aux = 1
  arr.reverse().forEach((x: number, i: number) => {
    if (i !== 0) {
      aux *= arr[i-1]
    }
    productRight[len - i] = aux
  })

  return arr.map((x: number, i: number) => productLeft[i] * productRight[i])
}

console.log(productOfArray([1, 2, 3, 4, 5]))
console.log(productOfArray([3, 2, 1]))
console.log(productOfArray2([1, 2, 3, 4, 5]))
console.log(productOfArray2([3, 2, 1]))
