function findOdd(A) {
    let uniqueVals = new Set(A);
    let countObj = {}
    for (element of uniqueVals){
      let counter = 0
      for (element2 of A){
        if (element == element2){
          counter ++
          countObj[element] = counter
        }
      }
    }
    for (num in countObj){
      if (countObj[num] % 2 == 1){
        return Number(num)
      }
    }
    return countObj;
  }