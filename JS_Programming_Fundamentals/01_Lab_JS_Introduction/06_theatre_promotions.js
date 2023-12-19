function ticketsPromotion(dayType, age){
    let ticketPrice = ""
    switch(dayType){
        case "Weekday":
            if (age >=0 & age <= 18){
                ticketPrice = "12$"
            }
            else if (age <= 64 & age > 18){
                ticketPrice = "18$"
            }
            else if (age > 64 & age <= 122){
                ticketPrice = "12$"
            }
            else{
                ticketPrice = "Error!"
            }
            break
        case "Weekend":
            if (age >=0 & age <= 18){
                ticketPrice = "15$"
            }
            else if (age <= 64 & age > 18){
                ticketPrice = "20$"
            }
            else if (age > 64 & age <= 122){
                ticketPrice = "15$"
            }
            else{
                ticketPrice = "Error!"
            }
            break
        case "Holiday":
            if (age >=0 & age <= 18){
                ticketPrice = "5$"
            }
            else if (age <= 64 & age > 18){
                ticketPrice = "12$"
            }
            else if (age > 64 & age <= 122){
                ticketPrice = "10$"
            }
            else{
                ticketPrice = "Error!"
            }
            break 
    }
    console.log(ticketPrice)
}

ticketsPromotion('Weekday', 42)
ticketsPromotion('Holiday', -12)
ticketsPromotion('Holiday', 15)