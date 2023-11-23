function calculateTennisPoints(input){

    let tournamentsCount = Number (input[0])
    let startingPoints = Number (input[1])
    let totalPoints = startingPoints
    let wonTournaments = 0

    for (let i = 2; i <= tournamentsCount + 1; i++){
        let tournamentStage = input[i]
        if (tournamentStage === "W"){
            totalPoints += 2000
            wonTournaments +=1
        }
        else if(tournamentStage === "F"){
            totalPoints += 1200
        }
        else{
            totalPoints += 720
        }
    }

    let avgPointsGained = (totalPoints - startingPoints) / tournamentsCount
    let winRatioPercents = wonTournaments / tournamentsCount * 100

    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${Math.floor(avgPointsGained)}`)
    console.log(`Average points: ${winRatioPercents.toFixed(2)}%`)

}
calculateTennisPoints(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
