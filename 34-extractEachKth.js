function extractEachKth(inputArray, k) {
 return inputArray.filter((x, i) => (i + 1) % k != 0);
}
