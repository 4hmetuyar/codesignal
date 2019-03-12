function areSimilar(A, B) {
 var different=[];
    for (var i=0;i<A.length;i++){
        if (A[i]!=B[i]){
            different.push(i);
        }
    }
    if(different.length==0)
        return true;
    else
        if (different.length==1||different.length>2){
            return false;
        }else
            if ((A[different[0]]==B[different[1]])&&(A[different[1]]==B[different[0]]))
                return true;
            else
                return false;
}
