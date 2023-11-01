function greater_number(input){
    let num1 = Number (input[0])
    let num2 = Number (input[1])

    if (num1 > num2){
        console.log(num1)
    }
    else if (num2 > num1) {
        console.log(num2)
    } else {
        console.log(num1)
    }
}

greater_number(["5", "3"])