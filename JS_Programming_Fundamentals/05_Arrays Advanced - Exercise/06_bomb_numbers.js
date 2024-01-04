function bombNumbers(sequence, bomb){
    let specialNumber = bomb[0]
    let power = bomb[1]
    let specialNumberIdx;

    let finalArray = sequence.slice(0)
    let arrayLength = finalArray.length
    let start;

    for (let i=0; i < finalArray.length; i++){
        if (specialNumber === finalArray[i]){

            specialNumberIdx = i
            start = i - power
            if (start < 0){
                start = 0
            }
            finalArray.splice(start, power*2 +1)
            i=0
        }
    }
    let sumNumbersInArray = finalArray.reduce((sum, a) => sum += a, 0)
    console.log(sumNumbersInArray)
}

  
console.log("--//--")
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
    
    )
console.log("--//--")
 