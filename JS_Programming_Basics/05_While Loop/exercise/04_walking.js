function stepsCalculate(input){
    let idx = 0

    let currentSteps = 0
    while (true){
        command = input[idx]
        if (command === "Going home"){
            currentSteps += Number(input[idx+1])
            if (currentSteps >= 10000){
                console.log("Goal reached! Good job!")
                let diff = currentSteps - 10000
                console.log(`${diff} steps over the goal!`)
                break
            }
            else{
                let diff1 = 10000 - currentSteps
                console.log(`${diff1} more steps to reach goal.`)
                break
            }
            
        }
        steps = Number(command)
        currentSteps += steps
        if (currentSteps >= 10000){
            console.log("Goal reached! Good job!")
            let diff = currentSteps - 10000
            console.log(`${diff} steps over the goal!`)
            break
        }
        idx++;
    }
}

stepsCalculate(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])

stepsCalculate(["125",
"250",
"4000",
"30",
"2678",
"4682"])

stepsCalculate(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
