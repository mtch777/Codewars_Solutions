function zero(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1]
      }else if(operand[0]=='minus'){
        return 0 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 0
      }else if(operand[0]=='divide'){
        return Math.floor(0 / operand[1])
      }
    }else{
      return 0
    }
  }
  function one(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 1
      }else if(operand[0]=='minus'){
        return 1 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 1
      }else if(operand[0]=='divide'){
        return Math.floor(1 / operand[1])
      }
    }else{
      return 1
    }
  }
  function two(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 2
      }else if(operand[0]=='minus'){
        return 2 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 2
      }else if(operand[0]=='divide'){
        return Math.floor(2 / operand[1])
      }
    }else{
      return 2
    }
  }
  function three(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 3
      }else if(operand[0]=='minus'){
        return 3 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 3
      }else if(operand[0]=='divide'){
        return Math.floor(3 / operand[1])
      }
    }else{
      return 3
    }
  }
  function four(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 4
      }else if(operand[0]=='minus'){
        return 4 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 4
      }else if(operand[0]=='divide'){
        return Math.floor(4 / operand[1])
      }
    }else{
      return 4
    }
  }
  function five(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 5
      }else if(operand[0]=='minus'){
        return 5 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 5
      }else if(operand[0]=='divide'){
        return Math.floor(5 / operand[1])
      }
    }else{
      return 5
    }
  }
  function six(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 6
      }else if(operand[0]=='minus'){
        return 6 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 6
      }else if(operand[0]=='divide'){
        return Math.floor(6 / operand[1])
      }
    }else{
      return 6
    }
  }
  function seven(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 7
      }else if(operand[0]=='minus'){
        return  7 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 7
      }else if(operand[0]=='divide'){
        return Math.floor(7 / operand[1])
      }
    }else{
      return 7
    }
  }
  function eight(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 8
      }else if(operand[0]=='minus'){
        return 8 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 8
      }else if(operand[0]=='divide'){
        return Math.floor(8 / operand[1])
      }
    }else{
      return 8
    }
  }
  function nine(operand) {
    if(operand){
      if (operand[0]=='plus'){
        return operand[1] + 9
      }else if(operand[0]=='minus'){
        return 9 - operand[1]
      }else if(operand[0]=='times'){
        return operand[1] * 9
      }else if(operand[0]=='divide'){
        return Math.floor(9 / operand[1])
      }
    }else{
      return 9
    }
  }
  function plus(num) {
    return ['plus',num]
  }
  function minus(num) {
    return ['minus',num]
  }
  function times(num) {
    return ['times',num]
  }
  function dividedBy(num) {
    return ['divide',num]
  }