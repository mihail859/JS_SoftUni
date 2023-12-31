function addSubtract(num1, num2, num3){
    const sumFunction = (a, b) => a+b;
    const subtract = (sum, c) => sum - c;
    let result = subtract(sumFunction(num1, num2), num3)
    console.log(result)
}

addSubtract(23,
    6,
    10
    )