function isLucky(n) {
  var numbers=n.toString().split("");
    var a=0,b=0;
    for(i=0;i<numbers.length/2;i++){
        a+=parseInt(numbers[i],10);
        b+=parseInt(numbers[numbers.length/2+i],10);
    }
    return a===b;
}
