function balance(input){

    let totalSum = 0
    let index = 0

    while (true){
        if (input[index] === "NoMoreMoney"){
            break
        }
        let deposit = Number (input[index])
        if (deposit < 0){
            console.log("Invalid operation!")
            break
        }
        else{
            totalSum += deposit
            console.log(`Increase: ${deposit.toFixed(2)}`)
        }
        index++;
    }
    console.log(`Total: ${totalSum.toFixed(2)}`)

}
balance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])

balance(["120",
"45.55",
"-150"])
