---
title: "Recursion and Dynamic Programming"
date: "2025-10-14"
excerpt: "Notes and examples from a class on top down dynamic programming"
---

Top Down recursion:
- Drill down to the base case. 
- Then you set the caches
- 2^7 to n


```python
@cache
def fib(self, n: int) -> int:
	if n == 0 or n == 1:
		return n
	
	return self.fib(n - 1) + self.fib(n - 2)
```

The @cache lets your recurse all the way down, and set the cache, and then when you hit 

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

### Number of Increasing Paths in a Grid:

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



