function chessBoardCellColor(cell1, cell2) {
 var a = cell1.charCodeAt(0) + cell1.charCodeAt(1);
    var b = cell2.charCodeAt(0) + cell2.charCodeAt(1);
    return a % 2 == b % 2;
}
