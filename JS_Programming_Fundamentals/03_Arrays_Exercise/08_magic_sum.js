function magicSum(arrayNumbers, n) {
    for (let i = 0; i < arrayNumbers.length; i++) {
        let currentNumber = arrayNumbers[i]
        for (let j = i+1; j < arrayNumbers.length; j++){
            let nextNumber = arrayNumbers[j]
            if (currentNumber + nextNumber === n){
                console.log(`${currentNumber} ${nextNumber}`)
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23],
    8
)
console.log("------***-----")
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    )