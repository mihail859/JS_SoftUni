function fitnessCenter(input){
    let visitors = Number (input[0])
    let idx = 1
    let activity = {
        "Back": 0,
        "Chest": 0,
        "Legs": 0,
        "Abs": 0,
        "Protein shake": 0,
        "Protein bar": 0
    }
    let workout = 0
    let protein = 0

    for (let i = 0; i < visitors; i++){
        let groupTrained = input[idx]
        if (groupTrained === "Protein shake" | groupTrained === "Protein bar"){
            protein++;
        } 
        else{
            workout++;
        }
        activity[groupTrained] += 1

        idx++;
    }
    console.log(`${activity["Back"]} - back`)
    console.log(`${activity["Chest"]} - chest`)
    console.log(`${activity["Legs"]} - legs`)
    console.log(`${activity["Abs"]} - abs`)
    console.log(`${activity["Protein shake"]} - protein shake`)
    console.log(`${activity["Protein bar"]} - protein bar`)

    let percentWorkout = workout / visitors * 100
    let percentProtein = protein / visitors * 100

    console.log(`${percentWorkout.toFixed(2)}% - work out`)
    console.log(`${percentProtein.toFixed(2)}% - protein`)
}

fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])
