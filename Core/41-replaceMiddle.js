function replaceMiddle(arr) {
var middle = arr.length/2;
    var removed = [];
    if(arr.length % 2 == 0){
        removed = arr.splice(middle-1, 2, arr[middle]+arr[middle-1]);
        return arr;
    }else{
        return arr;
    }
}
