function calculate(input){
    let change = Number (input[0])

    let coinsGiven = 0

    while (change > 0){
        if (change >= 2){
            change -= 2
        }
        else if (change >= 1){
            change -= 1
        }
        else if (change >= 0.50){
            change -= 0.50
        }
        else if (change >= 0.20){
            change -= 0.20
        }
        else if (change >= 0.10){
            change -= 0.10
        }
        else if (change >= 0.05){
            change -= 0.05
        }
        else if (change >= 0.02){
            change -= 0.02
        }
        else if (change >= 0.01){
            change -= 0.01
        }
        change = change.toFixed(2)

        coinsGiven++;
    }
    console.log(coinsGiven)
}

calculate(["1.23"])
calculate(["2"])
calculate(["0.56"])
calculate(["2.73"])