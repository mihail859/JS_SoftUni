function dartsGame(input){
    let playerName = input[0]

    let playerPoints = 301
    let trows = 0
    let unsuccessfulTrows = 0

    let idx = 1
    while (true){
        if (input[idx] === "Retire"){
            break
        }
        let sector = input[idx]
        let points = Number (input[idx + 1])

        let currentPoints = 0

        switch(sector){
            case "Single":
                currentPoints += points
                break
            case "Double":
                currentPoints += 2*points
                break
            case "Triple":
                currentPoints += 3*points
                break               
        }

        if (currentPoints <= playerPoints){
            trows++;
            playerPoints -= currentPoints
            if (playerPoints === 0){

            }
        }


        idx+=2
    }

}