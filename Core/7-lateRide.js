function lateRide(n) {
    return (((n - n % 60) / 60).toString() + (n % 60).toString())
        .split("")
        .map(e => parseInt(e))
        .reduce((a, b) => a + b);
}