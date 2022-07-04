function rot13(message){
    let alphaNum
    let returnString = ''
    for (let i=0;i<message.length;i++){
      alphaNum = message.slice(i,i+1).charCodeAt()
      if (alphaNum >= 65 && alphaNum <= 90){
        if(alphaNum+13 >= 65 && alphaNum+13 <= 90){
          alphaNum +=13
        }else{
          alphaNum -= 13
        }
      }else if (alphaNum >= 97 && alphaNum <= 122){
        if(alphaNum+13 >= 97 && alphaNum+13 <= 122){
          alphaNum +=13
        }else{
          alphaNum -= 13
        }
      }
      returnString += String.fromCharCode(alphaNum)
    }
    return returnString
  }