function special(number){
    let sumOfDigits = 0
    for (let i = 1; i <= number; i++){
        let numberAsString = i.toString()
        for (let j = 0; j < numberAsString.length; j++){
            let currentDigit = Number (numberAsString[j])
            sumOfDigits += currentDigit
        }
        if (sumOfDigits === 5 | sumOfDigits === 7 | sumOfDigits === 11){
            console.log(`${i} -> True`)
        }
        else{
            console.log(`${i} -> False`)
        }
        sumOfDigits = 0
    }
}

special(15)