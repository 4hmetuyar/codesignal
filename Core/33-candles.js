function candles(candlesNumber, makeNew) {
    burned = 0;
    leftOver = 0;
    while(candlesNumber){
        burned += candlesNumber;
        leftOver += candlesNumber;
        candlesNumber = Math.floor(leftOver/makeNew);
        leftOver -= Math.floor(leftOver/makeNew) * makeNew;
    }
    return burned;
}
