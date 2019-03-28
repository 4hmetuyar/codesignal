function pagesNumberingWithInk(current, numberOfDigits) {
    var page = 0;
    for(var  n = current; ;){
        if(n.toString().length <= numberOfDigits){
            numberOfDigits -= n.toString().length;
            page = n;
            n++;
        }else{
            break;
        }
    }
    return page;
}
