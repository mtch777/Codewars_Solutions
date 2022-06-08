function digital_root(n) {
    let wipNum = convert(n)
    while (wipNum.toString().length > 1)
      wipNum = convert(wipNum)
    return(wipNum)
  }
  
  function convert(n){
    let returnNum = 0
    nStr = n.toString();
    for (i=0;i< nStr.length;i++){
      returnNum += parseInt(nStr[i])
    }
    return(returnNum)
  }