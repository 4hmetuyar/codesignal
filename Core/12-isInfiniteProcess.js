function isInfiniteProcess(a, b) {
    return b < a ? true : (b - a) % 2 == 1 ? true : false;
}
