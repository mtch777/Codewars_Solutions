function pigIt(str){
    let words = str.split(' ');
    let first_letter
    let pig_word
    let return_string = ''
    
    for (let i = 0; i < words.length; i ++){
      if (['!','?'].includes(words[i])){
        return_string = return_string + ' ' + words[i]
      }else{
        first_letter = words[i][0];
        pig_word = words[i].slice(1) + first_letter + 'ay';
        return_string = (return_string + ' ' + pig_word);
        }
    }
    return return_string.substring(1);
    ;
  }