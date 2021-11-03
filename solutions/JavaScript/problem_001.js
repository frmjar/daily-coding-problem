function checkSum (nums, k) {
  let potentialSolution = new Set()
  for (let i = 0; i < nums.length; i++) {
    const target = k - nums[i]
    if (potentialSolution.has(target)) {
      return true
    }
    potentialSolution.add(nums[i])
  }
  return false
}
const result = checkSum([10, 15, 3, 7], 17)
console.log(result)
