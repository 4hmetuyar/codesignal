function commonCharacterCount(s1, s2) {
  var string1=s1.split('');
    var string2=s2.split('');
    var common=0;
    
    for(var i=0;i<string1.length;i++){
        if(string2.indexOf(string1[i])>=0){
            common++;
            string2.splice(string2.indexOf(string1[i]),1);
        }
    }
    return common;
}
