function dartsGame(input){
    let playerName = input[0]

    let playerPoints = 301
    let trows = 0
    let unsuccessfulTrows = 0

    let idx = 1
    while (true){
        if (input[idx] === "Retire"){
            console.log(`${playerName} retired after ${unsuccessfulTrows} unsuccessful shots.`)
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
            unsuccessfulTrows = 0
            if (playerPoints === 0){

                console.log(`${playerName} won the leg with ${trows} shots.`)
                break
            }
        }
        else{
            unsuccessfulTrows++;
        }


        idx+=2
    }

}

dartsGame(["Michael van Gerwen",
"Triple",
"20",
"Triple",
"19",
"Double",
"10",
"Single",
"3",
"Single",
"1",
"Triple",
"20",
"Triple",
"20",
"Double",
"20"])
