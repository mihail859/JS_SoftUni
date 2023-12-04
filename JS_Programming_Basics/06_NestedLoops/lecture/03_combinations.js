function combinations(input){
    let n = Number (input[0])

    let validCombinations = 0
    for (let number1  = 0; number1 <= n; number1++){
        for (let number2 = 0; number2 <= n; number2++){
            for (let number3 = 0; number3 <= n; number3++){
                let sumNumbers = number1 + number2 + number3
                if (sumNumbers === n){
                    validCombinations++;
                }
            }   
        }
    }
    console.log(validCombinations)
}    

combinations(["25"])
combinations(["20"])
combinations(["5"])