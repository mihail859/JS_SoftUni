function sumDigitsOfNumber(number){
    let stringNumber = number.toString()
    let sumDigits = 0
    for (let i = 0; i < stringNumber.length; i++){
        let currentDigit = Number (stringNumber[i])
        sumDigits += currentDigit
    }
    console.log(sumDigits)
}

sumDigitsOfNumber(245678)