function sumFirstAndLastElement(arrayWithNumbers){
    let stringNumbers = arrayWithNumbers.map(Number)
    let sum;
    if (stringNumbers.length > 1){
        sum = stringNumbers[0] + stringNumbers[stringNumbers.length - 1]
        
    }else{
        sum = arrayWithNumbers[0]
    }
    console.log(sum)


}

sumFirstAndLastElement(['20', '30', '40'])