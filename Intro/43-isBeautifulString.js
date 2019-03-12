function isBeautifulString(inputString) {
  var array = new Array(26).fill(0);
  for(var i = 0; i < inputString.length; i++){
    array[inputString[i].charCodeAt() - 97]++;
  }
  for(var i = 1; i < array.length; i++){
    if(array[i] > array[i-1]){
      return false;
    }
  }
  return true;
}
