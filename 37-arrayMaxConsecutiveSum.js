function arrayMaxConsecutiveSum(inputArray, k) {
 let sum = 0;
    let max = 0;

    for (let i = 0; i < k; i++) {
        sum += inputArray[i];
    }
    
    max = sum;

    for (let j = k; j < inputArray.length; j++) {
        sum -= inputArray[j - k];
        sum += inputArray[j];
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}
