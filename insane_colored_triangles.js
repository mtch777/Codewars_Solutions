function triangle(row) {
    let tempArray = []
    let letterSet = ['R','G','B']
    row = Array.from(row)
    while (row.length>1){
      tempArray = []
      for (let i=0;i<row.length-1;i++){
        if (row[i] == row[i+1]){
          tempArray.push(row[i])
        }else{
          tempArray.push(letterSet.filter(letter => !row.slice(i,i+2).includes(letter))[0])
        }
      }
      row = tempArray
    }
    return(row[0])
  }