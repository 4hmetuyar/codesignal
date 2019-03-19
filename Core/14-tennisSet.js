function tennisSet(score1, score2) {
  if(score1 > 7 || score2 > 7) return false
  if(score1 === 7 && score2 === 7) return false

  let winnerExists = false

  if((score1 === 6 && score2 < 5) || (score2 === 6 && score1 < 5)) {
    winnerExists = true
  }

  if((score1 >= 5 && score2 >= 5) && (score1 === 7 || score2 === 7)) {
    winnerExists = true
  }

  return winnerExists
}
