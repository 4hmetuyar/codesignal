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
  count = "";
  for (i = 1; i <= n; i++) {
    count += "9";
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
  return m - (m % n);
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
  return (nRows - row) * (nCols - col + 1);
}
```

## 5. Max Multiple

Given a divisor and a bound, find the largest integer N such that:

- N is divisible by divisor.
- N is less than or equal to bound.
- N is greater than 0.
- It is guaranteed that such a number exists.

### Example :

- For `divisor = 3` and `bound = 10`, the output should be
  `maxMultiple(divisor, bound) = 9`.

The largest integer divisible by 3 and not larger than 10 is 9.

### Solution :

```javascript
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}
```

## 6. Circle Of Numbers

Consider integer numbers from `0` to `n - 1` written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that `0` and `n - 1` are neighboring, too).

Given `n` and `firstNumber`, find the number which is written in the radially opposite position to `firstNumber`.

### Example :

- For `n = 10` and `firstNumber = 2`, the output should be
  `circleOfNumbers(n, firstNumber) = 7`.

### Solution :

```c#
int circleOfNumbers(int n, int firstNumber) {
    if(n >= 4 && n <=20 &&
      firstNumber >= 0 && firstNumber <= n-1){
        return (firstNumber +n/2)%n;
    }else{
        throw new ArgumentOutOfRangeException();
    }
}
```

## 7. Late Ride

One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

### Example :

- For `n = 240`, the output should be
  `lateRide(n) = 4`.

Since `240` minutes have passed, the current time is `04:00`. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.

- For n = 808, the output should be
  `lateRide(n) = 14`.

808 minutes mean that it's `13:28` now, so the answer should be 1 + 3 + 2 + 8 = 14.

### Solution :

```javascript
function lateRide(n) {
  return (((n - (n % 60)) / 60).toString() + (n % 60).toString())
    .split("")
    .map(e => parseInt(e))
    .reduce((a, b) => a + b);
}
```

## 8. Phone Call

Some phone usage rate may be described as follows:

- first minute of a call costs min1 cents,
- each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
- each minute after 10th costs min11 cents.
  You have `s` cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

### Example :

- For `min1 = 3`, `min2_10 = 1`, `min11 = 2`, and `s = 20`, the output should be
  `phoneCall(min1, min2_10, min11, s) = 14`.

Here's why:

- the first minute costs 3 cents, which leaves you with `20 - 3 = 17` cents;
- the total cost of minutes 2 through 10 is 1 \* 9 = 9, so you can talk 9 more minutes and still have `17 - 9 = 8` cents;
- each next minute costs 2 cents, which means that you can talk `8 / 2 = 4` more minutes.
  Thus, the longest call you can make is `1 + 9 + 4 = 14` minutes long.

### Solution :

```c#
int phoneCall(int min1, int min2_10, int min11, int S) {

  if (S < min1) {
    return 0;
  }
  for (int i = 2; i <= 10; i++) {
    if (S < min1 + min2_10 * (i-1)) {
      return i - 1;
    }
  }
  return 10 + (S - min1 - min2_10 * 9) / min11;
}
```

## 9. Reach Next Level

You are playing an RPG game. Currently your experience points (XP) total is equal to experience. To reach the next level your XP should be at least at threshold. If you kill the monster in front of you, you will gain more experience points in the amount of the reward.

Given values experience, threshold and reward, check if you reach the next level after killing the monster.

### Example :

- For `experience = 10`, `threshold = 15`, and `reward = 5`, the output should be
  `reachNextLevel(experience, threshold, reward) = true`;
- For `experience = 10`, `threshold = 15`, and `reward = 4`, the output should be
  `reachNextLevel(experience, threshold, reward) = false`.

### Solution :

```javascript
function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold;
}
```
