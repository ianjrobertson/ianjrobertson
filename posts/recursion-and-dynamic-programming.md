---
title: "Recursion and Dynamic Programming"
date: "2025-10-14"
excerpt: "Notes and examples from a class on top down dynamic programming"
---

### Introduction
This semester, I have been taking an interview prep class offered through BYU called Collaborative Problem Solving. This post contains some of the notes and my own exploration related to the topic of a top down recursion approach to Dynamic Programming. 

### The Basic Idea (A Bottom Up Approach)
The basic idea of dynamic programming is avoiding uncessary work. This can manifest itself in different ways, and a common one is through a bottom up approach. This is the first approach to dynamic programming that I was taught in schoool, and is very common. One example of this is the coin change problem.

[Coin Change](https://leetcode.com/problems/coin-change/description/)

```python
def coinChange(self, coins: List[int], amount: int) -> int:
	dp = [float('inf')]*(amount + 1)
	dp[0] = 0

	for i in range(1,amount + 1):
		for coin in coins:
			if i - coin >= 0 and dp[i - coin] != -1:
				dp[i] = min(dp[i], dp[i - coin] + 1)
	
	if dp[amount] == float('inf'):
		return - 1
	else:
		return dp[amount]
```

In this problem the question is, "what is the minimum number of coins I need to give exact change." Using a bottom up approach, we can calculate answers to "smaller" questions and use those answers to compute the optimal solution. This is a typical approach to dynamic programming. 

### A Top Down Approach

Lets flip things around, what if instead we said we were going to calculate every possible solution to the problem. Even ones that might now be optimal. Of course that's not going to pass on leetcode, but what if we introduced a special technique, memoization. 

In a bottom down approach, we say, *"okay, this bottom up stuff is kind of tricky. Lets start at the top, but if I have to do repeat work, lets store the answer so I don't have to do all the hard work calculating it again."*

#### Top Down recursion:
- Create a pure function
- Drill down to the base case. 
- Set caches on the way back
- Refer to cached values on the way to paradise!

Here's an example of this with fibonacci number. In python, the `@cache` decorator, makes it so the function parameters are memoized. If we construct a pure function (*meaning the same input results in the same output*) it acts as a cache for us. A lot of DP problems can be solved quickly by creating a function and memoizing it.  

[Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

```python
@cache
def fib(self, n: int) -> int:
	if n == 0 or n == 1:
		return n
	
	return fib(n - 1) + fib(n - 2)
```

The `@cache` lets your recurse all the way down, and set the cache, and then when you compute other numbers, you don't have to do all the work recursing to the base case again. 

[Word Break](https://leetcode.com/problems/word-break/)

```python
def wordBreak(self, s: str, wordDict: List[str]) -> bool:
	@cache
	def word_break(remaining_string):
		if remaining_string == '':
			return True
		for word in wordDict:
			if remaining_string.startswith(word):
				if word_break(remaining_string[len(word):]):
					return True
		return False
	return word_break(s)
```

Easiest way to do dp, do everything, put an @cache on it. 
Pure function, input always maps to an ouput with no side effects. you can cache it. 

[Number of Increasing Paths in a Grid](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/)

```python
def countPaths(self, grid: List[List[int]]) -> int:
	total = 0
	dr = [(-1,0), (1,0), (0,-1), (0,1)]
	
	@cache
	def dfs(row, col):
		increasing_paths = 1
		for r, c in dr:
			nr = row + r
			nc = col + c
			if nr < 0 or nc < 0 or nr >= len(grid) or nc >= len(grid[0]):
				continue
			if grid[row][col] < grid[nr][nc]:
				increasing_paths += dfs(nr, nc)
		return increasing_paths

	for row in range(len(grid)):
		for col in range(len(grid[0])):
			total += dfs(row, col)
	return total % (10**9 + 7)
```

For this problem cached function is the dfs(row, col)

We cache the function return associated with the number of increasing paths out of a single (row, col). 


### Conclusion
Wow! Look at that, we can use top down recursion to solve Easy, Medium, and Hard DP problems!

I think this approach is really great for interviews because I find it a lot more intuitive that bottom up approaches. The question of "what can I cache?" can be easier to figure out for a lot of problems. Also it's a power move to throw an `@cache` on a timed-out answer and get it to pass!



