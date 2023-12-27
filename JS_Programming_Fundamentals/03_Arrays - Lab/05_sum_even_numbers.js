function sumEven(stringArray){
    let sumNumbers = 0
    const numberArray = stringArray.map(str => parseInt(str, 10));
    for (let number of numberArray){
        if (isEven(number)){
            sumNumbers += number
        }
    }
    function isEven(num){
        if (num % 2 === 0){
            return true
        }
        return false
    }
    console.log(sumNumbers)
}

sumEven(['1','2','3','4','5','6'])