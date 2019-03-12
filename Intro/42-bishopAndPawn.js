function bishopAndPawn(bishop, pawn) {
    return Math.abs((bishop.charCodeAt(0) - 96) - (pawn.charCodeAt(0) - 96)) == (Math.abs(bishop.charAt(1) - pawn.charAt(1)));   
}
