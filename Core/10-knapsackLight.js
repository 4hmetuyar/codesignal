function knapsackLight(v1, w1, v2, w2, mW) {
    return w1 + w2 <= mW? v1 + v2: v1 > v2 && w1 <= mW? v1: w2 <= mW? v2: w1 <= mW? v1: 0; 
}
