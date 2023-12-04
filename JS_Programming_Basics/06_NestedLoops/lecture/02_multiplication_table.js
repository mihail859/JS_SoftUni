function multiplicationTable(){
    for (let number1 = 1; number1 <= 10; number1++){
        for (let number2 = 1; number2 <= 10; number2++){
            let result = number1 * number2
            console.log(`${number1} * ${number2} = ${result}`)
        }
    }
}

multiplicationTable()