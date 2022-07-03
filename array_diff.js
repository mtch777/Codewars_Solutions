function arrayDiff(a, b) {
    for (let i=0;i<a.length;i++){
      for (let j=0;j<b.length;j++){
        if (a[i] == b[j]){
          a.splice(a.indexOf(b[j]),1)
          i = -1
          continue
        }
      }
    }
    return a
  }