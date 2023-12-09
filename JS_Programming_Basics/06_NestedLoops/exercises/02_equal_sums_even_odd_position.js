function calculateSumPositions(input){
    let firstNumber = Number(input[0])
    let secondNumber = Number (input[1])

    let numbersArray = []
    for (i = firstNumber; i <= secondNumber; i++){
        let currentNumber = i.toString()

        let sumOdd = 0
        let sumEven = 0
        for(let j = 0; j < 6; j++){
            let currentNumValue = Number (currentNumber[j])
            if (j % 2 == 0){
                sumOdd += currentNumValue
            }
            else{
                sumEven += currentNumValue
            }
        }
        if (sumEven === sumOdd){
            numbersArray.push(currentNumber)
        }
    }

    const joinedNumbers = numbersArray.join(' ');
    console.log(joinedNumbers);

}


calculateSumPositions(["100000",
"100050"])
