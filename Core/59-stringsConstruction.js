function stringsConstruction(A, B) {
    var i=0;   
    var n=0;
    B=B.split("");
    while(B.indexOf(A[i])!=-1){
        
        B.splice(B.indexOf(A[i]),1);
        i++;
        if(i==A.length){
            n++;
            i=0;
        }
    }
    return n;
}
