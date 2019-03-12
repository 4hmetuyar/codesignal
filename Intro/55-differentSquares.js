function differentSquares(matrix) {
 let s = new Set();
    for(let i = 0;i < matrix.length - 1;i++){
        for(let j = 0;j < matrix[0].length - 1;j++){
            s.add('' + matrix[i][j] + matrix[i+1][j] + matrix[i][j+1] + matrix[i+1][j+1]);
        }
    }
    return s.size;
}
