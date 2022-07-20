function orderWeight(strng) {
    let strngArray = strng.split(' ')
    let aSum = 0
    let bSum = 0

    strngArray = strngArray.sort(function (a, b) {
        aSum = 0
        bSum = 0
        for (let i = 0; i < a.length; i++) {
            aSum += parseInt(a[i])
        }
        for (let j = 0; j < b.length; j++) {
            bSum += parseInt(b[j])
        }

        if (aSum - bSum == 0) {
            for (let k = 0; k < a.length; k++) {
                if (a[k] != b[k]) {
                    return a[k] - b[k]
                }
            }
        } else {
            return aSum - bSum
        }
    })
    return strngArray.join(' ')
}