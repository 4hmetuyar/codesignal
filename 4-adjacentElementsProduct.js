function adjacentElementsProduct(inputArray) {
 var cb = Number.NEGATIVE_INFINITY;
    for(var i=0;i<inputArray.length-1;i++){
        if(inputArray[i]*inputArray[i+1] > cb){
          cb = inputArray[i]*inputArray[i+1];
        }
    }
  return cb;
}
