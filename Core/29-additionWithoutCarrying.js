function additionWithoutCarrying(param1, param2) {
    param1 = [...''+param1].map(Number);
    param2 = [...''+param2].map(Number);
    result = [];
    if(param1.length > param2.length){
        leadingZeros(param2,param1.length);
    }else if(param2.length > param1.length){
        leadingZeros(param1,param2.length);
    }

    param1.map((item,index) => {
        result.push((item + param2[index])%10);
    });

    return parseInt(result.join(''));
}

function leadingZeros(str,tam){
    if(str.length < tam){
        str.unshift(0);
        leadingZeros(str,tam);
    }else{
        return str;
    }
}
