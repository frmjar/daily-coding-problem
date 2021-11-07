function maxSum (numbers: number[]): number {
  let maximo: number = Number.MIN_VALUE

  for (let index = 0; index < numbers.length; index++) {
    const suma = numbers[index] + maxSum(numbers.slice(index+2))
    maximo = Math.max(suma, maximo)
  }

  return maximo
}

console.log(maxSum([2, 4, 6, 2, 5]))
console.log(maxSum([5, 1, 1, 5]))
