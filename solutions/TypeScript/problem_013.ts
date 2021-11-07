function longestSubstring (s: string, k: number): number {
  let longest: number = 0
  let actualLength: number
  let distinctCharacters: string[]

  for (let i = 0; i < s.length - 1; i++) {
    distinctCharacters = [s[i]]

    actualLength = 1

    for (let j = i + 1; j < s.length; j++) {
      if (!distinctCharacters.includes(s[j])) {
        if (distinctCharacters.push(s[j]) > k) {
          break
        }
      }
      actualLength++
    }
    longest = Math.max(actualLength, longest)
  }

  return longest
}

console.log(longestSubstring('abcba', 2)) // 2
