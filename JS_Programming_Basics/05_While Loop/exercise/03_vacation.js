function moneyNeeded(input){
    let neededMoney = Number(input[0])
    let availableMoney = Number(input[1])

    let idx = 2
    let daysInARowSpent = 0
    let totalDays = 0
    while (true){
        let action = input[idx]
        let sum = Number(input[idx+1])

        totalDays++;

        if (action === "spend"){
            daysInARowSpent++;
            if (sum > availableMoney){
                availableMoney = 0
            }
            if (daysInARowSpent === 5){
                console.log("You can't save the money.")
                console.log(`${totalDays}`)
                break
            }
            availableMoney -= sum

        }
        else{
            daysInARowSpent = 0
            availableMoney += sum
            if (availableMoney >= neededMoney){
                console.log(`You saved the money for ${totalDays} days.`)
                break
            }
        }
        idx+=2
    }
}


moneyNeeded(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
