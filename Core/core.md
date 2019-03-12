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

## 4. Seats In Theater

Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

### Example :

- For `nCols = 16`, `nRows = 11`, `col = 5`, and `row = 3`, the output should be
`seatsInTheater(nCols, nRows, col, row) = 96`.


### Solution : 

```javascript
function seatsInTheater(nCols, nRows, col, row) {
return (nRows - row) * (nCols - col + 1)
}
```