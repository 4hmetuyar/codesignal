function isTandemRepeat(inputString) {
    var middle = inputString.length / 2;
    return inputString.slice(0, middle) == inputString.slice(middle);
}
