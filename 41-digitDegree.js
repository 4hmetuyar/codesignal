function addDigits(n, m){
    if(n < 10)
        return m;
    else{
        var t = 0;
        while(n > 0){
            t += n % 10;
            n = Math.floor(n/10);
        }
        return addDigits(t, m + 1);
    }
}

function digitDegree(n) {
    return addDigits(n, 0);
}
