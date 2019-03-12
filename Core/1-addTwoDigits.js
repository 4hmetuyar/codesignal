function addTwoDigits(n) {
  var tens = Math.floor(n / 10);
  var ones = n % 10;
  var sum = tens + ones;
  return sum;
}