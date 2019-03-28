removeArrayPart = (inputArray, l, r) => {
    var removed = inputArray.splice(l,r-l+1);
    return inputArray;
}
