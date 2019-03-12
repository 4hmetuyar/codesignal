int[][] minesweeper(bool[][] matrix) {
    int[][] b = new int[matrix.Length][];
    for(int i = 0; i < matrix.Length; i++){
        b[i] = new int[matrix[0].Length];
        for(int j = 0; j < matrix[0].Length; j++){
            for(int n = i-1; n <= i+1; n++){
                for(int m = j-1; m <= j+1; m++){
                    //Console.WriteLine("{0} {1}", n, m);
                    if(n==i && m==j)
                        continue;
                    else{
                        try{
                            if(matrix[n][m]) b[i][j] += 1;
                        }
                        catch{
                        }
                    }
                }
            }
        }
    }
    return b;
}
