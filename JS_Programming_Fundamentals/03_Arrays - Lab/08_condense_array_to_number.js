function solve(arrayNumbers){
    let condensed = []

    while (arrayNumbers.length > 1){
        for (let i = 0; i < arrayNumbers.length - 1; i++){
            condensed[i] = arrayNumbers[i] + arrayNumbers[i+1]
        }   
        arrayNumbers = condensed
        condensed = []
    }
    console.log(arrayNumbers.toString())

}

solve([2, 10, 3])