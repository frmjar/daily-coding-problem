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

```python
class Node:
    def **init**(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right
```
The following test should pass:

```python
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

[Solution TypeScript](solutions/TypeScript/problem_003.ts)

[Solution JavaScript](solutions/JavaScript/problem_003.js)

---

### Problem 4

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.


[Solution TypeScript](solutions/TypeScript/problem_004.ts)

[Solution JavaScript](solutions/JavaScript/problem_004.js)

---

### Problem 5

```cons(a, b)``` constructs a pair, and ```car(pair)``` and ```cdr(pair)``` returns the first and last element of that pair. For example, ```car(cons(3, 4)) returns 3```, and ```cdr(cons(3, 4)) returns 4```.

Given this implementation of cons:
```python
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
```
Implement car and cdr.

[Solution TypeScript](solutions/TypeScript/problem_005.ts)

[Solution JavaScript](solutions/JavaScript/problem_005.js)

---

### Problem 7

Given the mapping ```a = 1, b = 2, ... z = 26```, and an encoded message, count the number of ways it can be decoded.

For example, ```the message '111' would give 3```, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

[Solution TypeScript](solutions/TypeScript/problem_007.ts)

[Solution JavaScript](solutions/JavaScript/problem_007.js)

---

### Problem 8

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

```   
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
 ```

 [Solution TypeScript](solutions/TypeScript/problem_008.ts)

 [Solution JavaScript](solutions/JavaScript/problem_008.js)

 --- 

### Problem 9

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, ```[2, 4, 6, 2, 5]``` should return ```13```, since we pick ```2```, ```6```, and ```5```. ```[5, 1, 1, 5]``` should return ```10```, since we pick ```5``` and ```5```.

Follow-up: Can you do this in O(N) time and constant space?

[Solution TypeScript](solutions/TypeScript/problem_009.ts)

[Solution JavaScript](solutions/JavaScript/problem_009.js)s

---

### Problem 10

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

[Solution TypeScript](solutions/TypeScript/problem_010.ts)

[Solution JavaScript](solutions/JavaScript/problem_010.js)

---

### Problem 11

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

[Solution TypeScript](solutions/TypeScript/problem_011.ts)

[Solution JavaScript](solutions/JavaScript/problem_011.js)