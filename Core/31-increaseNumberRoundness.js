function increaseNumberRoundness(n) {
    var response = false;
    var findCero = true;
    var trailZero = 0;
    array = [...''+n].reverse().map(Number);
    for(var i = 0; i < array.length; i++){
        if(array[i] == 0){ 		
            findZero = true; 
            trailZero++;
        }else if(array[i] != 0 && findZero == true){ 
            if(array.slice(i).includes(0)){
                return true;
            }
        }
    }
    return false;
}
