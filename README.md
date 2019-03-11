# Codesignal Simple Example

## 1. Add

Write a function that returns the sum of two numbers.
### Example :

- For `param1 = 1` and `param2 = 2`, the output should be
`add(param1, param2) = 3`.

### Solution : 

```javascript
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

### Solution : 
```javascript
function centuryFromYear(year) {
return Math.floor((year-1)/100) + 1;
}
```

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

## 5. shapeArea
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

![alt text](https://codesignal.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1551538776748.png)

### Example :

- For `n = 2`, the output should be
`shapeArea(n) = 5;`
- For `n = 3`, the output should be
`shapeArea(n) = 13`.

### Solution : 
```javascript
function shapeArea(n) {
    return 2*Math.pow(n,2) - 2*n +1;
}
```
