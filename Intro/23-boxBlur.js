function boxBlur(image) {
 var sum=0;
  var blurred=[],line=[];
  for (var x=0;x+3<=image.length;x++){
    for (var y=0;y+3<=image[0].length;y++){
      sum=0;
      for (var i=x;i<3+x;i++){
        for (var j=y;j<3+y;j++){
          sum+=image[i][j];
        }
      }
       line.push(Math.floor(sum/9));
    }
    blurred[x]=line;
    line=[];
  }
  return blurred;
}
