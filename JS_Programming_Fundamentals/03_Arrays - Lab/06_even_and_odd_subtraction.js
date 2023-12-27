function solve(numbersAsString){
    let numbersArray = numbersAsString.map(str => parseInt(str, 10))
    let sumEven = 0
    let sumOdd = 0

    for (let num of numbersArray){
        if (num % 2 === 0){
            sumEven += num
        }
        else{
            sumOdd += num
        }
    }
    let difference = sumEven - sumOdd
    console.log(difference)
}

solve([1,2,3,4,5,6])