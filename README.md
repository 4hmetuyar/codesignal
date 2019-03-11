# Codesignal Simple Example

## 1. Add

Write a function that returns the sum of two numbers.
### Example :

- For `param1 = 1` and `param2 = 2`, the output should be
`add(param1, param2) = 3`.

### Solution : 

```
function add(param, ...otherParams) {    
    return param + (otherParams.length ? add(...otherParams) : 0);
}
```

## 2. CenturyFromYear
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
### Example :

- For `year = 1905`, the output should be
`centuryFromYear(year) = 20;`
- For `year = 1700`, the output should be
`centuryFromYear(year) = 17`.

## 3. CheckPalindrome
Given the string, check if it is a palindrome. (A palindrome is a string that reads the same left-to-right and right-to-left.)

### Example :

- For `inputString = "aabaa"`, the output should be
`checkPalindrome(inputString) = true;`
- For `inputString = "abac"`, the output should be
`checkPalindrome(inputString) = false;`
- For `inputString = "a"`, the output should be
`checkPalindrome(inputString) = true.`

## 4.AdjacentElementsProduct
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

### Example :

- For `inputArray = [3, 6, -2, -5, 7, 3]`, the output should be
`adjacentElementsProduct(inputArray) = 21`.

`7` and `3` produce the largest product.
