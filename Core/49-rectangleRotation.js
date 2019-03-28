function rectangleRotation(A, B) {
  var c = 0;
  
  for (var i=-A-B; i<=A+B; i++) {
    for (var j=-A-B; j<=A+B; j++) {
      if (Math.abs(i+j)*Math.sqrt(2) <= A && Math.abs(i-j)*Math.sqrt(2) <= B) c++;
    }
  }
  
  return c;
}
