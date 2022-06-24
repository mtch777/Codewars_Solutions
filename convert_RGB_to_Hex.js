function rgb(r, g, b){
    let rgbListParam = [r,g,b]
    let rgbList = []
    let rgbVal
    
    for (let i=0;i<rgbListParam.length;i++){
      rgbListParam[i] = Math.max(0,Math.min(255,rgbListParam[i])) //translate to 0-255 range
      rgbList.push(Math.floor(rgbListParam[i]/16)); //first hex #
      rgbList.push(Math.floor(rgbListParam[i]%16)); //second hex #
    }
    console.log(rgbList)
    
    let rgbLetter
    let returnString = ''
    
    for (let i=0;i<rgbList.length;i++){
      rgbVal = rgbList[i]
      if (rgbVal > 9){
        switch (rgbVal){
          case 10:
            rgbLetter = 'A';
            break;
          case 11:
            rgbLetter = 'B';
            break;
          case 12:
            rgbLetter = 'C';
            break;
          case 13:
            rgbLetter = 'D';
            break;
          case 14:
            rgbLetter = 'E';
            break;
          case 15:
            rgbLetter = 'F';
            break;
          }
        rgbList[i] = rgbLetter
      }
      returnString += rgbList[i].toString()
    }
    
    return returnString
  }