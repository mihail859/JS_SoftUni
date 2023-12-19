function vacationPrice(group, type, day){
    let price = 0
    switch(type){
        case "Students":
            if (day === "Friday"){
                price = 8.45
            }
            else if (day === "Saturday"){
                price = 9.80
            }
            else{
                price = 10.46
            }
            break
        
        case "Business":
            if (day === "Friday"){
                price = 10.90
            }
            else if (day === "Saturday"){
                price = 15.60
            }
            else{
                price = 16
            }
            break  
        default:
            if (day === "Friday"){
                price = 15
            }
            else if (day === "Saturday"){
                price = 20
            }
            else{
                price = 22.50
            }
            break  
        }
    let totalPrice = group * price
    
    if (type === "Students" & group >= 30){
        totalPrice *= 0.85
    }
    else if(type === "Business" & group >= 100){
        totalPrice -= 10 * price
    }
    else if (type === "Regular" & group >= 10 & group <= 20){
        totalPrice *= 0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacationPrice(30,"Students","Sunday")