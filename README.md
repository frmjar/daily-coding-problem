# Daily Coding Problem

Solutions to problems sent by [Daily Coding Problem](http://www.dailycodingproblem.com)

---

### Problem 1

Given a list of numbers, return whether any two sums to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

[Solution TypeScript](solutions/problem_001.ts)

[Solution JavaScript](dist/problem_001.js)

---

### Problem 2

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

[Solution TypeScript](solutions/TypeScript/problem_002.ts)

[Solution JavaScript](solutions/JavaScript/problem_002.js)

---

### Problem 3

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

```javascript
class Node:
    def **init**(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right
```
The following test should pass:

```javascript
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

[Solution TypeScript](solutions/TypeScript/problem_003.ts)

[Solution JavaScript](solutions/JavaScript/problem_003.js)
