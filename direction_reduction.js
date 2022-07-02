function dirReduc(arr){
    let returnArray = []
    for (let i=0;i<arr.length -1;i++){
      if((arr[i]+arr[i+1]).includes("SOUTH") && (arr[i]+arr[i+1]).includes("NORTH")||(arr[i]+arr[i+1]).includes("WEST") && (arr[i]+arr[i+1]).includes("EAST")){
        arr.splice(i,2)
        i = -1
        continue
      }
    }
    return arr
  }