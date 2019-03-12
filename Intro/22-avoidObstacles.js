function avoidObstacles(inputArray) {
  for(var i = 2;;i++){
        var t = true;
        for(var j = 0;j < inputArray.length;j++)   
            t = t && inputArray[j]%i != 0;
        if(t) return i;
    }
}
