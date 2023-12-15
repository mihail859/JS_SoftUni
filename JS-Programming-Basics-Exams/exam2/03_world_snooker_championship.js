function solve(input){
    let stage = input[0]
    let ticketType = input[1]
    let countTickets = Number (input[2])
    let pictureWithTrophy = input[3]

    let price = 0

    switch (stage){
        case "Quarter final":
            if (ticketType === "Standard"){
                price = 55.50
            }
            else if (ticketType === "Premium"){
                price = 105.20
            }
            else {
                price = 118.90
            }
        break
        
        case "Semi final":
            if (ticketType === "Standard"){
                price = 75.88
            }
            else if (ticketType === "Premium"){
                price = 125.22
            }
            else {
                price = 300.40
            }
        break

        case "Final":
            if (ticketType === "Standard"){
                price = 110.10
            }
            else if (ticketType === "Premium"){
                price = 160.66
            }
            else {
                price = 400
            }
        break
    }

    let totalPriceTickets = price * countTickets

    if (totalPriceTickets > 4000){
        totalPriceTickets *= 0.75
    }
    else if(totalPriceTickets > 2500){
        totalPriceTickets *= 0.90
        if (pictureWithTrophy === "Y"){
            totalPriceTickets += 40 * countTickets
        }
    }
    else{
        if (pictureWithTrophy === "Y"){
            totalPriceTickets += 40 * countTickets
        }
    }

    
    console.log(`${totalPriceTickets.toFixed(2)}`)

}
solve(["Final",
"Premium",
"25",
"Y"])

solve(["Semi final",
"VIP",
"9",
"Y"])

solve(["Quarter final",
"Standard",
"11",
"N"])

