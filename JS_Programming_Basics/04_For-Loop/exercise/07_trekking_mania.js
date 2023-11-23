function trekking(input){
    let mountainPeaksArray= {
        "Musala": 0,
        "MontBlanc": 0,
        "Kilimanjaro": 0,
        "K2": 0,
        "Everest": 0
    }

    let totalClimbers = 0
    let groups = Number(input[0])
    for (let i = 1; i <= groups; i++){
        let climbersCount = Number (input[i])

        totalClimbers += climbersCount

        if (climbersCount <= 5){
            mountainPeaksArray["Musala"] += climbersCount
        }
        else if (climbersCount <= 12){
            mountainPeaksArray["MontBlanc"] += climbersCount
        }
        else if (climbersCount <= 25){
            mountainPeaksArray["Kilimanjaro"] += climbersCount
        }
        else if (climbersCount <= 40){
            mountainPeaksArray["K2"] += climbersCount
        }
        else{
            mountainPeaksArray["Everest"] += climbersCount
        }

    }

    let MusalaClimbersPercent = mountainPeaksArray["Musala"] / totalClimbers * 100
    let MontBlancClimbersPercent = mountainPeaksArray["MontBlanc"] / totalClimbers * 100
    let KilimanjaroClimbersPercent = mountainPeaksArray["Kilimanjaro"] / totalClimbers * 100
    let K2ClimbersPercent = mountainPeaksArray["K2"] / totalClimbers * 100
    let EverestClimbersPercent = mountainPeaksArray["Everest"] / totalClimbers * 100


    console.log(`${MusalaClimbersPercent.toFixed(2)}%`)
    console.log(`${MontBlancClimbersPercent.toFixed(2)}%`)
    console.log(`${KilimanjaroClimbersPercent.toFixed(2)}%`)
    console.log(`${K2ClimbersPercent.toFixed(2)}%`)
    console.log(`${EverestClimbersPercent.toFixed(2)}%`)
}
trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
