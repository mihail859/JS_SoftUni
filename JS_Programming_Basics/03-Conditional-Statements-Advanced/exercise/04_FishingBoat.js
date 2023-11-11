function calculate(input){
    let budget = Number (input[0])
    let season = input[1]
    let fishermen = Number (input[2])

    let boatRentPriceArray = {
        "Spring": 3000,
        "Summer": 4200,
        "Autumn": 4200,
        "Winter": 2600
    }
    if (fishermen <= 6){
        boatRentPriceArray[season] *= 0.90
    }
    else if (fishermen <= 11){
        boatRentPriceArray[season] *= 0.85
    }
    else{
        boatRentPriceArray[season] *= 0.75
    }

    if (fishermen % 2 === 0 & season != "Autumn"){
        boatRentPriceArray[season] *= 0.95
    }

    let difference = Math.abs(budget - boatRentPriceArray[season])
    if (budget >= boatRentPriceArray[season]){
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }
}

calculate(["3000",
"Summer",
"11"])

calculate(["3600",
"Autumn",
"6"])

calculate(["2000",
"Winter",
"13"])
