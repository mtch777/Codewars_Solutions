function cakes(recipe, available) {
    let cakeNum = -1
    let ingredientNum
    for (const ingredient in recipe){
      ingredientNum = Math.floor(available[ingredient.toString()]/recipe[ingredient.toString()])
      if(ingredientNum != ingredientNum){ //divide by 0
        ingredientNum = 0
      }
      if (cakeNum == -1){ //initial number
        cakeNum = ingredientNum
      }else{
        cakeNum = Math.min(cakeNum,ingredientNum) //take smallest feasible number of cakes
      }
    }
    return(cakeNum)
  }