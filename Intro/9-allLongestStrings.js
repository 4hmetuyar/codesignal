function allLongestStrings(inputArray) {
    var result=[""];
    var count=0;
    for(var i=0;i<inputArray.length;i++){
        if(inputArray[i].length>=result[result.length-1].length){
            if(inputArray[i].length>result[result.length-1].length)
                count=1;
            else
                count++
            result.push(inputArray[i]);            
        }
    }
    return result.slice(result.length-count);;
}
