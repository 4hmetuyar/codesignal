# Core 

## 1. Add Two Digits

You are given a two-digit integer `n`. Return the sum of its digits.

### Example :

- For `n = 29`, the output should be
`addTwoDigits(n) = 11`.

### Solution : 

```javascript
function addTwoDigits(n) {
  var tens = Math.floor(n / 10);
  var ones = n % 10;
  var sum = tens + ones;
  return sum;
}
```

## 2. Largest Number

Given an integer `n`, return the largest number that contains exactly `n` digits.

### Example :

- For `n = 3`, the output should be
`largestNumber(n) = 999`.

### Solution : 

```javascript
function largestNumber(n) {
    count =""
    for(i=1;i<=n;i++){
        count+="9";
    }
    return parseInt(count);
}
```
## 3. Candies

`n` children have got `m` pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

### Example :

- For `n = 3` and `m = 10`, the output should be
`candies(n, m) = 9`.

Each child will eat `3` pieces. So the answer is `9`.

### Solution : 

```javascript
function candies(n, m) {
    return m - m % n;
}
```