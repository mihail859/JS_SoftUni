function divisible(input){
    let n1 = Number (input[0])
    let n2 = Number (input[1])

    let numbersDivisibleArray = []
    let sum = 0
    for (let i = n1; i <= n2; i++){
        if (i % 9 == 0){
            numbersDivisibleArray.push(i)
            sum += i
        }
    }
    console.log(`The sum: ${sum}`)
    for (j = 0; j < numbersDivisibleArray.length; j++){
        console.log(numbersDivisibleArray[j])
    }
}

divisible(["100", "200"])