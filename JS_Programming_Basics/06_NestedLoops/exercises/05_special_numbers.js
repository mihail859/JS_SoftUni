function printSpecialNumbers(input){
    let n = Number (input[0])

    let specialNumbersArray = []
    let isSpecial = true

    for (let i = 1111; i <= 9999; i++){
        let currentNumber  = i.toString()
        for (let j = 0; j<4; j++){
            let currentDigit = Number (currentNumber[j])
            if (n % currentDigit != 0){
                isSpecial = false
                break
            }
        }
        if (isSpecial){
            specialNumbersArray.push(currentNumber)
        }
        else{
            isSpecial = true
        }
    }
    let joinedNumbers = specialNumbersArray.join(" ");
    console.log(joinedNumbers)

}

printSpecialNumbers(["3"])