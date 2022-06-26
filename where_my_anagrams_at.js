function anagrams(word, words) {
    word = word.split('').sort().join('')
    
    let words2 = []
    let returnList = []
    
    for (i=0;i<words.length;i++){
      words2[i] = words[i].split('').sort().join('')
      if (word == words2[i]){
        returnList.push(words[i])
      }
    }
    return returnList
  }