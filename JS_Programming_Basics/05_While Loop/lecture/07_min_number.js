function minNumber(input){
    let index = 0
    let numbersArray = []

    while (input[index] !== "Stop"){
        let currentNumber = Number (input[index])
        numbersArray.push(currentNumber)
        index++
    }
    let minNumber = Math.min(...numbersArray)
    console.log(minNumber)
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])

minNumber(["-10",
"20",
"-30",
"Stop"])

minNumber(["45",
"-20",
"7",
"99",
"Stop"])

minNumber(["999",
"Stop"])

minNumber(["-1",
"-2",
"Stop"])
