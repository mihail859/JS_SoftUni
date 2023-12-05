function trip(input){
    let idx = 1

    let destination = input[0]
    while (destination !== "End"){
        budget = Number (input[idx])

        while (budget > 0){
            idx++
            currentSum = Number (input[idx])
            budget -= currentSum
        }

        idx+=2
        console.log(`Going to ${destination}!`)
        destination = input[idx-1]
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


trip(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

