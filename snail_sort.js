snail = function(array) {
    let squareLen = array[0].length //get dimensions of square
    
    let returnList = array[0] //seed the return list with the first row
    
    let coord = [0,squareLen-1] //initialize the coordinates in top right corner
    let coordIndex = 0 //start by changing the row
    let coordIterator = 1 //start by adding 1 to the index (which is currently referencing the row)
    
    for (let i=squareLen-1;i>=1;i--){//iterate; decreasing from squareLen-1 to 1
      for (let y=0;y<2;y++){//repeat the iteration twice for each number
        for (let x=0;x<i;x++){
          coord[coordIndex] += coordIterator //add the iterator (+1 or -1) to the given index(row or col)
          returnList.push(array[coord[0]][coord[1]])
        }
        if (coordIndex == 0){//if the algorithm previously edited the row
          coordIndex = 1 //switch to editing the column
          coordIterator *= -1 //switch the iterator from + to - & vice versa
        }else if (coordIndex == 1){//if the algorithm previously edited the column
          coordIndex = 0 //switch to editing the row (keep the iterator the same)
        }
      }
    }
    return returnList
  }