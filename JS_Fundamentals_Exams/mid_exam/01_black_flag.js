function solve(input){
    input = input.map(Number)
    
    let daysOfPlunder = input[0]
    let dailyPlunder = input[1]
    let expectedPlunder = input[2]

    let gatherPlunder = 0

    for (let day = 1; day <= daysOfPlunder; day++){
        gatherPlunder  += dailyPlunder

        if (day % 3 === 0){
            gatherPlunder += dailyPlunder* 0.5
        }
        if (day % 5 === 0){
            gatherPlunder *= 0.70
        }
    }


    if (gatherPlunder >= expectedPlunder){
        console.log(`Ahoy! ${gatherPlunder.toFixed(2)} plunder gained.`);
    }else{
        let percentageGather = gatherPlunder / expectedPlunder * 100
        console.log(`Collected only ${percentageGather.toFixed(2)}% of the plunder.`)
    }
}

solve((["5",
"40",
"100"])
)