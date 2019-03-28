function isPower(n) {
if (n == 1) return 1;
    for(var i = 2; i <= n/2; i++){
        for(var j = 2; j <= n/2; j++){
            var res = Math.pow(i,j)
            if(res > n){ //No necesitamos analizar los demas si son mayores
                break;
            }else{
                if(res == n){
                    return true;
                }
            }
        }
    }
    return false;
}
