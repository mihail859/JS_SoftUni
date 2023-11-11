function getDressed(input){
    let degrees = Number (input[0])
    let dayType = input[1]

    let outfit = ""
    let shoes = ""

    if (degrees >= 10 & degrees <= 18){
        if (dayType === "Morning"){
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        }
        else if (dayType === "Afternoon"){
            outfit = "Shirt"
            shoes = "Moccasins" 
        }
        else{
            outfit = "Shirt"
            shoes = "Moccasins" 
        }
    }
    else if (degrees > 18 & degrees <= 24){
        if (dayType === "Morning"){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
        else if (dayType === "Afternoon"){
            outfit = "T-Shirt"
            shoes = "Sandals" 
        }
        else{
            outfit = "Shirt"
            shoes = "Moccasins" 
        }
    }
    else{
        if (dayType === "Morning"){
            outfit = "T-Shirt"
            shoes = "Sandals"
        }
        else if (dayType === "Afternoon"){
            outfit = "Swim Suit"
            shoes = "Barefoot" 
        }
        else{
            outfit = "Shirt"
            shoes = "Moccasins" 
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}
getDressed(["16",
"Morning"])

getDressed(["22",
"Afternoon"])
