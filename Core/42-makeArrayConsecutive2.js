function makeArrayConsecutive2(sequence) {
 min = Math.min(...sequence);
  max = Math.max(...sequence);
  result = 0;
  for(var i = min; i <= max; i++){
    if(!sequence.includes(i)){
      result++;
    }
  }
  return result;
}
