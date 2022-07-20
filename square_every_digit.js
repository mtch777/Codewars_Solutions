function squareDigits(num) {
    num = num.toString()
    let returnString = ""
    for (i = 0; i < num.length; i++) {
        returnString += Math.pow(parseInt(num[i]), 2)
    }
    return parseInt(returnString)
}