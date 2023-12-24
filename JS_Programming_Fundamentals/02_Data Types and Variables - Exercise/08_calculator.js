function calculate(number1, operator, number2){
    let evalString = number1.toString() + operator + number2.toString()
    let result = eval(evalString)
    console.log(result.toFixed(2))

}    
calculate(5,
    '+',
    10
    )