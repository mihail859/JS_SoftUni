function calculate(input){
    
    let tourPrice = Number (input[0])
    let NumberOfPuzzles = Number (input[1])
    let NumberOfDolls = Number (input[2])
    let NumberOfBears = Number (input[3])
    let NumberOfMinions = Number (input[4])
    let NumberOfTrucks = Number (input[5])


    const puzzle = 2.60
    const doll = 3
    const bear = 4.10
    const minion = 8.20
    const truck = 2

    let puzzlesPrice = puzzle * NumberOfPuzzles
    let dollsPrice = doll * NumberOfDolls
    let bearPrice = bear * NumberOfBears
    let minionPrice = minion * NumberOfMinions
    let truckPrice = truck  * NumberOfTrucks

    let toysCount = NumberOfPuzzles + NumberOfDolls + NumberOfBears + NumberOfMinions + NumberOfTrucks
    let totalPrice = puzzlesPrice + dollsPrice + bearPrice + minionPrice + truckPrice

    if (toysCount >= 50){
        totalPrice *= 0.75
    }
    totalPrice *= 0.90
    let diff = Math.abs(totalPrice - tourPrice)
    if (totalPrice >= tourPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    }
    else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
calculate(["40.8",
"20",
"25",
"30",
"50",
"10"])
calculate(["320",
"8",
"2",
"5",
"5",
"1"])
