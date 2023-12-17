function sumOfOdd(count){
    let totalSum = 0
    let currentNumber = 1
    while (count >0){
        totalSum += currentNumber
        totalSum += currentNumber
        console.log(currentNumber)
        currentNumber+=2
        count--;
    }
    console.log(: `Sum: {total sum}`)
}
sumOfOdd(5)
sumOfOdd(3)