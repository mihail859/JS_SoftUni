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

    let totalTicketsSold = studentTicketsSold + standardTicketsSold + kidTicketsSold
    let percentStudentTickets = studentTicketsSold / totalTicketsSold * 100
    let percentStandardTickets = standardTicketsSold / totalTicketsSold * 100
    let percentKidTickets = kidTicketsSold / totalTicketsSold * 100

    console.log(`Total tickets: ${totalTicketsSold}`)
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`)
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`)
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`)
    
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

console.log("---------------------------------------")

ticketsStatistics(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])


