function calculatePoints(input){

    let actorName = input[0]
    let pointsFromAcademy = Number (input[1])
    let judgesCount = Number (input[2])

    let isNominated = false

    for (let index = 3; index < input.length; index+=2) {
        let judgeName = input[index]
        let pointsFromJudge = input[index + 1]

        let currentPoints = (judgeName.length * pointsFromJudge) / 2
        pointsFromAcademy += currentPoints
        
        if(pointsFromAcademy > 1250.5){
            isNominated = true
            break
        }
    }
    if (isNominated){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`)

    }
    else{
        let neededPoints = 1250.5 - pointsFromAcademy
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`)

    }

}
calculatePoints(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

calculatePoints(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

