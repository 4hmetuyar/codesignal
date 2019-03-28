function isSumOfConsecutive2(n) {
var result = 0;
    var cont = 0;
    for(var i = 1; i <= n ; i++){
        result = i;
       for(var j = i+1; i <= n ; j++){
            result += j;
            if(result > n){
                result = 0;
                break;
            }else if(result == n){
                cont++;
                break;
            }
        }
    }
    return cont;
}
