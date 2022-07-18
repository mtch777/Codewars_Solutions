function firstNonRepeatingLetter(s) {
    let letters = []
    let letter
    let sLower = s.toLowerCase()
    let letterLower

    for (i = 0; i < s.length; i++) {
        letter = s.slice(i, i + 1)
        letterLower = letter.toLowerCase()
        if (sLower.indexOf(letterLower) == sLower.lastIndexOf(letterLower)) {
            letters.push(letter)
        }
    }
    return (letters.slice(0, 1).toString())
}