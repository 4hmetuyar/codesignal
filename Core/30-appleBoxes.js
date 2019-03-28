function appleBoxes(k) {
    var odd = even = 0;
    for(var i = 0; i <= k; i++){
        if(i&0 == 0){
            even += getRedApples(i);
        }else{
            odd += getYellowApples(i);
        }
    }
    return odd - even;
}

getRedApples = n => n*n
getYellowApples = n => n*n
