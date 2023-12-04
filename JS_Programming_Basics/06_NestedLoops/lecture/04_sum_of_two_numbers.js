function sumOfNUmbers(input){
    let startInterval = Number (input[0])
    let endInterval = Number (input[1])
    let magicNumber = Number (input[2])

    let isCombinationFound = false
    let combinationCountNumber = 0

    for (let i = startInterval; i <= endInterval; i++){
        for (let j = startInterval; j <= endInterval; j++){

            let result = i + j
            combinationCountNumber++;
            
            if (result === magicNumber){
                isCombinationFound = true
                console.log(`Combination N:${combinationCountNumber} (${i} + ${j} = ${result})`)
                break
            }
        }
        if (isCombinationFound){
            break
        }
    }
    if (!isCombinationFound){
        console.log(`${combinationCountNumber} combinations - neither equals ${magicNumber}`)
    }
}

sumOfNUmbers(["1",
"10",
"5"])

sumOfNUmbers(["88",
"888",
"1000"])

sumOfNUmbers(["23",
"24",
"20"])

sumOfNUmbers(["88", 
"888", 
"2000"])

