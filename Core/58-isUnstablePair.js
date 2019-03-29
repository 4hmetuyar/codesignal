function isUnstablePair(filename1, filename2) {
 var a = filename1<filename2;
 var b = filename1.toUpperCase()<filename2.toUpperCase();
 return a!==b;
 
}
