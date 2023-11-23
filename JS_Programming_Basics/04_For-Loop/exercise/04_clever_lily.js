function calculate(input){
    let age = Number (input[0])
    let washerPrice = Number (input[1])
    let toyPrice = Number (input[2])

    let moneyReceived = 0
    for (let i = 1; i <= age; i++){
        if (i % 2 == 0){
            moneyReceived += i / 2 * 10
            moneyReceived -= 1
        }
        else{
            moneyReceived += toyPrice
        }
    }
    let difference = Math.abs(moneyReceived - washerPrice)
    if (washerPrice <= moneyReceived){
        console.log(`Yes! ${difference.toFixed(2)}`)
    }
    else{
        console.log(`No! ${difference.toFixed(2)}`)
    }
}


calculate(["21",
"1570.98",
"3"])

