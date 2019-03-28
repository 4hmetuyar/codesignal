var past = []
function squareDigitsSequence (n){
    var result = 0;
    var array = [...''+n].map(Number);

    if(past.length == 0) past.push(n);
    for(var i = 0; i < array.length; i++){
        result += Math.pow(array[i],2);
    }
    if(past.includes(result)){
        return past.length+1;
    }else{
        past.push(result);
        return squareDigitsSequence (result)
    }
}
