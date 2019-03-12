function alphabeticShift(inputString) {
var shift=inputString.split("");
    var shifted=shift.map((curr)=>{
        if (curr=='z')
            return 'a';
        else
            return String.fromCharCode(curr.charCodeAt(0)+1);
    })
    return shifted.join("");
}
