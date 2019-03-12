int circleOfNumbers(int n, int firstNumber) {
    if(n >= 4 && n <=20 &&
      firstNumber >= 0 && firstNumber <= n-1){
        return (firstNumber +n/2)%n;
    }else{
        throw new ArgumentOutOfRangeException();
    }
}