function evenDigitsOnly(n) {
 var nums=n.toString().split("");
    return nums.reduce((acc,currval,currindex,arr)=>{
        return acc&&currval%2==0
    },true);
}
