arrayReplace = (inputArray, elemToReplace, substitutionElem) =>
    inputArray.map(item => item == elemToReplace ? substitutionElem : item)
