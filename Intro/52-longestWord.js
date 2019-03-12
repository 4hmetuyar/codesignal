function longestWord(sent) {
  var arr = sent.match(/[a-z]+/gi);
 arr.sort(function(a, b){
 return b.length - a.length;
});
 return arr[0];
}
