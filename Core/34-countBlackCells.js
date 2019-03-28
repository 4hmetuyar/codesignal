function countBlackCells(n, m) {
    //z=Math.min(n,m)
    r=n+m-1
        
    for(i=1;i<n;i++)
        if ((i*m)%n==0) r++
            
    return r
}
