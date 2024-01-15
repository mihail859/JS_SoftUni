function largest(num1, num2, num3){
    let numbersArr = [num1, num2, num3]
    let biggest = numbersArr.sort((a, b) => b-a)
    console.log(`The largest number is ${biggest[0]}.`)
}

largest(5, -3, 16)