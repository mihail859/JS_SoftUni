function tournament(input){
    let idx = 0
    let wins = 0
    let loses = 0

    let totalMatchesPlayed = 0
    while (true){
        if (input[idx] === "End of tournaments"){
            break
        }
        let tournament = input[idx]
        idx++;
        let matches = Number (input[idx])
        for (let i = 1; i <= matches; i++){
            totalMatchesPlayed++;
            idx+=2
            let homeTeamScored = Number (input[idx-1])
            let guestTeamScored = Number (input[idx])
            let diff = Math.abs(homeTeamScored - guestTeamScored)
            if(homeTeamScored > guestTeamScored){
                console.log(`Game ${i} of tournament ${tournament}: win with ${diff} points.`)
                wins++;
            }
            else{
                console.log(`Game ${i} of tournament ${tournament}: lost with ${diff} points.`)
                loses++;
            }
        }

    }
    let percentageWin = wins / totalMatchesPlayed * 100
    let percentageLoses = loses / totalMatchesPlayed * 100
    console.log(`${percentageWin.toFixed(2)}% matches win`)
    console.log(`${percentageLoses.toFixed(2)}% matches lost`)
}

tournament(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])
