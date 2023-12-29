function maxNumber(arrayNumbers){
    let topIntegers = []
    let isTopInteger = true
    for (let i = 0; i < arrayNumbers.length; i++){
        let currentNumber = arrayNumbers[i]

        for (let j = i+1; j < arrayNumbers.length; j++){
            let compareNumber = arrayNumbers[j]
            if (currentNumber <= compareNumber){
                isTopInteger = false
                break
            }
        }
        if (isTopInteger){
            topIntegers.push(currentNumber)
        }
        else{
            isTopInteger = true
        }
    }
    console.log(topIntegers.join(" "))
}

maxNumber([1, 4, 3, 2])