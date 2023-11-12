function sumNumbers(input){
    let numberAsString = input[0]

    let sum = 0
    for (let i = 0; i < numberAsString.length; i++){
        let n = Number (numberAsString[i])
        sum += n
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumNumbers(["1234"])
sumNumbers(["564891"])