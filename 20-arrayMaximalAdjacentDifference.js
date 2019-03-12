function arrayMaximalAdjacentDifference(inputArray) {
  return inputArray.reduce(function(acc,currval,currind,arr){
        if(Math.max(currval,arr[currind+1])-Math.min(currval,arr[currind+1])>acc)
                acc=Math.max(currval,arr[currind+1])-Math.min(currval,arr[currind+1]);
        return acc;
    },0);
}
