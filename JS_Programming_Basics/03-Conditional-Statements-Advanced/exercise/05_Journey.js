function calculatePrice(input){
    budget = Number (input[0])
    season = input[1]

    let destinationsArray = ["Bulgaria", "Balkans", "Europe"]
    let destination = ""
    let vacationPrice = 0
    let sleepPlace = ""

    if (budget <= 100){
        destination += destinationsArray[0]
        if(season === "summer"){
            vacationPrice += 0.30 * budget 
            sleepPlace += "Camp"       

        }
        else{
            vacationPrice += 0.70 * budget
            sleepPlace += "Hotel"
        }
    }
    else if (budget <= 1000){
        destination += destinationsArray[1]
        if(season === "summer"){
            vacationPrice += 0.40 * budget        
            sleepPlace += "Camp"  
        }
        else{
            vacationPrice += 0.80 * budget
            sleepPlace += "Hotel"
        }
    }
    else{
        destination += destinationsArray[2]
        vacationPrice += 0.90 * budget 
        sleepPlace += "Hotel"
 	}
    console.log(`Somewhere in ${destination}`)
    console.log(`${sleepPlace} - ${vacationPrice.toFixed(2)}`)
    
}

calculatePrice(["50", "summer"])
calculatePrice(["75", "winter"])

calculatePrice(["312", "summer"])

calculatePrice(["678.53", "winter"])

calculatePrice(["1500", "summer"])

