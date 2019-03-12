int depositProfit(int deposit, int rate, int threshold) {
   let year = 0;

    while (threshold > deposit) {
        deposit += deposit * (rate / 100);
        year++;
    }

    return year;
}
