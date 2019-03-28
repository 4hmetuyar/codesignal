int leastFactorial(int n) {
var product = 1;
    var i = 2;
    while (product < n) {
        product *= i++;
    }
    return product;
}
