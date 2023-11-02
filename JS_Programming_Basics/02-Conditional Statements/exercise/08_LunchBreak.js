function breakCalculate(input){
    
    let serialName = input[0]
    let episodeDuration  = Number (input[1])
    let breakDuration = Number (input[2])

    let lunchTime = 1/8 * breakDuration
    let freeTime = 1/4 * breakDuration

    let leftTime = breakDuration - lunchTime - freeTime

    let difference = Math.abs(leftTime - episodeDuration)

    if (leftTime >= episodeDuration){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(difference)} minutes free time.`)
    }
    else{
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(difference)} more minutes.`)
    }
}

breakCalculate(["Game of Thrones",
"60",
"96"])

breakCalculate(["Teen Wolf",
"48",
"60"])
