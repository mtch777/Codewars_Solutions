function validParentheses(parens) {
    while (parens.indexOf('()') != -1)
      parens = parens.slice(0,parens.indexOf('()')) + parens.slice(parens.indexOf('()')+2,parens.length)
    if (parens == ""){
      return true;
    }else{
      return false;
    }
  }