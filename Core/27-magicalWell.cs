function magicalWell(a, b, n) {
 var result = 0;
    for(var i = 0; i < n; i++){
        result += a*b;
        a++;
        b++;
    }
    return result;
}
