function skiTrip(input){
    let days = Number (input[0])
    let typeRoom = input[1]
    let rating = input[2]

    let roomPricesArray = {
        "room for one person": 18.00,
        "apartment": 25.00,
        "president apartment": 35.00
    }
    let nightStays = days - 1
    let totalPrice = nightStays  * roomPricesArray[typeRoom]
    if (typeRoom === "apartment"){
        if (nightStays < 10){
            totalPrice *= 0.70
        }
        else if (nightStays <= 15){
            totalPrice *= 0.65
        }
        else{
            totalPrice *= 0.50
        }
    }
    else if (typeRoom === "president apartment"){
        if (nightStays < 10){
            totalPrice *= 0.90
        }
        else if (nightStays <= 15){
            totalPrice *= 0.85
        }
        else{
            totalPrice *= 0.80
        }
    }
    if (rating === "positive"){
        totalPrice *= 1.25
    }
    else{
        totalPrice *= 0.90
    }
    console.log(totalPrice.toFixed(2))
}

skiTrip(["14",
"apartment",
"positive"])

skiTrip(["30",
"president apartment",
"negative"])

skiTrip(["12",
"room for one person",
"positive"])

skiTrip(["2",
"apartment",
"positive"])
