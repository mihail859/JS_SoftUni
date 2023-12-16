function wordTennisRanklist(input){
    let tournamentsPlay = Number (input[0])
    let startingPoints = Number (input[1])

    let pointsGained = 0
    let tournamentsWon = 0

    let idx  = 2
    for (let  i=0; i < tournamentsPlay; i++){
        let tournamentsStage = input[idx]

        switch (tournamentsStage){
            case "W":
                pointsGained += 2000
                tournamentsWon++;
                break
            case "F":
                pointsGained += 1200
                break
            case "SF":
                pointsGained += 720
                break                    
        }
        idx++;
    }
    let totalPoints = startingPoints + pointsGained
    let averagePointsGained = pointsGained / tournamentsPlay
    let percentsTournamentsWon = tournamentsWon / tournamentsPlay * 100

    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${Math.floor(averagePointsGained)}`)
    console.log(`${percentsTournamentsWon.toFixed(2)}%`)
}

wordTennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])

console.log('----------')
wordTennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])
console.log('----------')
wordTennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])
