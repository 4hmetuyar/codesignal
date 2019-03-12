function absoluteValuesSumMinimization(a) {
  return findMedian(a);
}

function findMedian(n){
   var l = n.length;
   return l%2 == 0? n[Math.floor(l/2)-1] : n[Math.floor(l/2)];
}
