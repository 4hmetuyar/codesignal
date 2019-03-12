function palindromeRearranging(inputString) {
 var palindrome=true;
    var center=0;
    var array=inputString.split("");
    while(palindrome&&array.length>0){
        if(array.indexOf(array[0],1)>0)
            array.splice(array.indexOf(array[0],1),1);
        else
            if(center<1)
                center++;
            else 
                palindrome=false;
        array=array.slice(1);
        
    }
    return palindrome;
}
