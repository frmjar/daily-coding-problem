function findMissing (arr) {
  arr.sort()
  let missing = 1
  let encontrado = false
  let i = 0
  while (!encontrado && i < arr.length) {
    const current = arr[i]
    if (current <= 0) { } else if (current === missing) { missing++ } else if (current > missing) { encontrado = true }
    i++
  }
  return missing++
}
console.log(findMissing([3, 4, -1, 1])) // 2
console.log(findMissing([1, 2, 0])) // 3
console.log(findMissing([1, -2, 4, 5, 6, 3, 7, 9])) // 2
