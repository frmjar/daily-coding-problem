function ways (n: number): number {
  if (n === 0) return 1
  if (n < 0) return 0
  return ways(n - 1) + ways(n - 2)
}

function waysVariableSteps (n: number, steps: number[]): number {
  if (n === 0) return 1
  if (n < 0) return 0
  let ways: number = 0
  for (let i = 0; i < steps.length; i++) {
    ways += waysVariableSteps(n - steps[i], steps)
  }
  return ways
}

console.log(ways(4))
console.log(waysVariableSteps(4, [1, 3, 5]))
