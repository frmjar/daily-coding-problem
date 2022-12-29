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

[Solution JavaScript](solutions/JavaScript/problem_009.js)

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

---

### Problem 12

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

```
1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
```

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

[Solution TypeScript](solutions/TypeScript/problem_012.ts)

[Solution JavaScript](solutions/JavaScript/problem_012.js)

---

### Problem 13

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

[Solution TypeScript](solutions/TypeScript/problem_013.ts)

[Solution JavaScript](solutions/JavaScript/problem_013.js)

---

### Problem 14

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.

[Solution TypeScript](solutions/TypeScript/problem_014.ts)

[Solution JavaScript](solutions/JavaScript/problem_014.js)

---

### Problem 15

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

[Solution TypeScript](solutions/TypeScript/problem_015.ts)

[Solution JavaScript](solutions/JavaScript/problem_015.js)

---

### Problem 16

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

* **record(order_id):** adds the order_id to the log
* **get_last(i):** gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.

[Solution TypeScript](solutions/TypeScript/problem_016.ts)

[Solution JavaScript](solutions/JavaScript/problem_016.js)

---

### Problem 17

Suppose we represent our file system by a string in the following manner:

The string ```"dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"``` represents:

```
dir
    subdir1
    subdir2
        file.ext
```
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string ```"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"``` represents:

```
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
```
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is ```"dir/subdir2/subsubdir2/file2.ext"```, and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

**The name of a file contains at least a period and an extension.**

**The name of a directory or sub-directory will not contain a period.**

[Solution TypeScript] In progress

[Solution JavaScript] In progress

---

### Problem 18

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

* 10 = max(10, 5, 2)
* 7 = max(5, 2, 7)
* 8 = max(2, 7, 8)
* 8 = max(7, 8, 7)

Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

[Solution TypeScript](solutions/TypeScript/problem_018.ts)

[Solution JavaScript](solutions/JavaScript/problem_018.js)

---