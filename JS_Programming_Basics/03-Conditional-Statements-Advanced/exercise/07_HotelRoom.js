function calculatePrice(input){
    let monthsArray = ['May', 'June', 'July', 'August', 'September', 'October']

    let month = input[0]
    let nights = Number (input[1])

    let hotel = {
        [monthsArray[0]]: {"studio": 50, "apartment": 65},
        [monthsArray[5]]: {"studio": 50, "apartment": 65},
        [monthsArray[1]]: {"studio": 75.20, "apartment": 68.70},
        [monthsArray[4]]: {"studio": 75.20, "apartment": 68.70},
        [monthsArray[2]]: {"studio": 76, "apartment": 77},
        [monthsArray[3]]: {"studio": 76, "apartment": 77}
    }
    

    if (month === monthsArray[0] || month === monthsArray[5]){
        if (nights > 14){
            hotel[month].studio *= 0.70
        }
        else if (nights > 7){
            hotel[month].studio *= 0.95
        }
    }
    else if (month === monthsArray[1] || month === monthsArray[4]){
        if (nights > 14){
            hotel[month].studio *= 0.80
        }
    }
    if (nights > 14){
        hotel[month].apartment *= 0.90
    }
    let totalPriceStudio = hotel[month].studio * nights
    let totalPriceApartment = hotel[month].apartment * nights

    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)

}

calculatePrice(["May",
"15"])

calculatePrice(["June",
"14"])

calculatePrice(["August",
"20"])


