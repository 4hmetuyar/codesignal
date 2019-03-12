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
