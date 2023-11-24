function maxNumber(input){
    let index = 0
    let numbersArray = []

    while (input[index] !== "Stop"){
        let number = Number(input[index])

        numbersArray.push(number)
        index++;
    }
    let maxNumber = Math.max(...numbersArray)
    console.log(maxNumber)
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])

maxNumber(["-10",
"20",
"-30",
"Stop"])

maxNumber(["45",
"-20",
"7",
"99",
"Stop"])
