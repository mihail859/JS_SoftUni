function divide(number) {
    let biggerDivisor = ""
    let isDivisible = true

    if (number % 10 === 0) {
        biggerDivisor = "10"
    }
    else if (number % 7 === 0) {
        biggerDivisor = "7"
    }
    else if (number % 6 === 0) {
        biggerDivisor = "6"
    }
    else if (number % 3 === 0) {
        biggerDivisor = "3"
    }
    else if (number % 2 === 0) {
        biggerDivisor = "2"
    }
    else {
        biggerDivisor = "Not divisible"
        isDivisible = false
    }

    if (isDivisible){
        console.log(`The number is divisible by ${biggerDivisor}`)
    }
    else{
        console.log('Not divisible')
    }
}

divide(30)
divide(15)
divide(12)
divide(1643)