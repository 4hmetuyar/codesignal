function comfortableNumbers(L, R) {
    c = 0;
    for (var a = L; a < R; a++) {
        for (var b = a + 1; b <= R; b++) {
          sda = sumDigits(a);
          sdb = sumDigits(b);
          if (b >= a - sda && b <= a + sda && a >= b - sdb && a <= b + sdb) {
              c++;
          }
        }
    }
    return c;
}

function sumDigits(n) {
    return parseInt((""+n).split('').reduce((a,b)=>parseInt(a)+parseInt(b)));
}
