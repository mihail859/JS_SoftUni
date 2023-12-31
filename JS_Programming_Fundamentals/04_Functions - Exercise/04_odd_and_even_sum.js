function oddAndEvenSum(number){
    let sumEven = 0
    let sumOdd = 0
    let numberAsString = number.toString()
    for (let i = 0; i < numberAsString.length; i++){
        let currentNumber = Number (numberAsString[i])

        if (currentNumber % 2 === 0){
            sumEven += currentNumber
        }
        else {
            sumOdd += currentNumber
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

oddAndEvenSum( 1000435)
oddAndEvenSum( 3495892137259234)