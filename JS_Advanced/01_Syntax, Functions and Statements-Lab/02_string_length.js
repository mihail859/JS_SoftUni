function stringLen(str1, str2, str3){
    let sum = str1.length + str2.length + str3.length
    let avgSum = sum / 3 | 0

    console.log(sum)
    console.log(avgSum)
}

stringLen('chocolate', 'ice cream', 'cake')