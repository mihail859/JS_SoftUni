function solve(num1, num2, action){
    let obj;
    obj = {
        'multiply': (a, b) => a*b,
        'divide': (a, b) = a / b,
        'add' : (a, b) => a +b,
        'subtract' : (a, b) => a-b
    }
    let result = obj[action](num1, num2)
    console.log(result)
}
solve(5,
    5,
    'multiply'
    )