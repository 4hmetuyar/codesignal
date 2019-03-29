function isSubstitutionCipher(string1, string2) {
  if (string1.length !== string2.length) return false;
  let cypher = {};
  
  for (let i = 0; i < string1.length; i++) {
    let char1 = string1[i], char2 = string2[i];
    if (!(cypher[char1])) {
      let outputs = new Set(Object.values(cypher));
      if (outputs.has(char2)) return false;
      cypher[char1] = char2;
    } else if (cypher[char1] !== char2) {
      return false;
    }
  }
  return true;
}
