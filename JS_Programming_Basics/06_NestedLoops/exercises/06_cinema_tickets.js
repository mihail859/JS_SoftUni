function ticketsStatistics(input){

    let studentTicketsSold = 0
    let standardTicketsSold = 0
    let kidTicketsSold = 0

    let idx = 0
    while (true){
        let moveName = input[idx]
        if (moveName === "Finish"){
            break
        }
        idx++
        let seatsForMove = Number(input[idx])
        let seatsSold = 0

        for (let s = 0; s < seatsForMove; s++){
            idx++
            let typeTicket = input[idx]
            if (typeTicket === "End"){
                break
            }
            else if (typeTicket === "student"){
                studentTicketsSold++;
            }
            else if (typeTicket === "standard"){
                standardTicketsSold++;
            }
            else{
                kidTicketsSold++;
            }
            seatsSold++;

        }
        let percentageFull = seatsSold / seatsForMove * 100
        console.log(`${moveName} - ${percentageFull.toFixed(2)}% full.`)
        idx++
    }
}

ticketsStatistics(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])

