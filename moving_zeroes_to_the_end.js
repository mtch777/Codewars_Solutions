function moveZeros(arr) {
    let numZeros = 0;
    let new_array = []
    
    for (i=0;i<arr.length;i++){
      if (arr[i]===0){
        numZeros++;
        }else{
          new_array.push(arr[i])
        }
    }
    for (i=0;i<numZeros;i++){
      new_array.push(0);
    }
    return new_array;
  }