function  calculate (num1, num2, operator){
    let stringEval = `${num1}${operator}${num2}`
    let result = eval(stringEval)
    console.log(result);
}

calculate(5, 6, '+')
calculate(3, 5.5, '*')