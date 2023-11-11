function calculate(input){
    let number1 = input[0]
    let number2 = input[1]
    let operator = input[2]

    let result = number1 + operator + number2
    try{
        let finalResult = Number(eval(result))
        if ((operator === "/" || operator === "%") && number2 == 0) {
            throw new Error(`Cannot divide ${number1} by zero`);
          }
        let sumSubtractMultiplyArray = ["+", "-", "*"]
        if (sumSubtractMultiplyArray.includes(operator)){
            let EvenOdd = ""
            if (finalResult % 2 === 0){
                EvenOdd += "even"
            }
            else{
                EvenOdd += "odd"
            }
            console.log(`${number1} ${operator} ${number2} = ${finalResult} - ${EvenOdd}`)
        }
        else if (operator === "/"){
            console.log(`${number1} / ${number2} = ${finalResult.toFixed(2)}`)
        }
        else{
            console.log(`${number1} % ${number2} = ${finalResult}`)
        }
    }

    catch(error){
        console.log(`Cannot divide ${number1} by zero`)
    }
}
calculate(["10",
"12",
"+"])

calculate(["10",
"1",
"-"])

calculate(["7",
"3",
"*"])

calculate(["123",
"12",
"/"])

calculate(["10",
"3",
"%"])

calculate(["112",
"0",
"/"])

calculate(["10",
"0",
"%"])
