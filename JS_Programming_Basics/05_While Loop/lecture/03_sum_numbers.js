function sumOfNumbers(input){
    let givenNumber = Number (input[0])

    let index = 1
    let sumOtherNumbers = 0
    while (sumOtherNumbers < givenNumber){
        let currentNumber = Number (input[index])
        sumOtherNumbers += currentNumber
        index++
    }
    console.log(sumOtherNumbers)
}

sumOfNumbers(["100",
"10",
"20",
"30",
"40"])

sumOfNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
