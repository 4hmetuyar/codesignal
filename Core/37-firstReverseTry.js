function firstReverseTry(arr) {
    if(arr.length == 0) return [];
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
     return arr;
}
