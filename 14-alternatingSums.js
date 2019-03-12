function alternatingSums(a) {
 var sum = a.reduce(function(acc, val,currentIndex) {
        if(currentIndex%2==0)
            acc[0] += val;
        else
            acc[1] += val;
        return acc;
    }, [0,0]);
    return sum;
}
