boolean isMAC48Address(String inputString) {
String[] arr = inputString.split("-");
if(inputString.length() != 17) return false;
if(arr.length != 6)
return false;
for(String s: arr){
if(s.length() == 0 || s.length() >2)
return false;
for(char c: s.toCharArray()){
if((c >='A' && c<='F') ||(c >='0' && c<='9'))
else
return false;
}
}
return true;
}
