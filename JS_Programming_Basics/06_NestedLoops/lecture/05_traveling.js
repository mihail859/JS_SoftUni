function trip(input){
    let idx = 2

    let destination = input[0]
    let minSum = Number (input[1])
    let currentSum = 0
    while (destination !== "End"){
        budget = Number (input[idx])

        while (budget > 0){
            idx++
            currentSum = Number (input[idx])
            
        }

        destination = input[idx]
    }
}

trip(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
