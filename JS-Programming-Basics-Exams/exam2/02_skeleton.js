function printStatement(input){
    let minuteControl = Number (input[0])
    let secondsControl = Number (input[1])
    let lengthTrace = Number (input[2])
    let secondsPer100Meters = Number (input[3])

    let controlTimeInSeconds = 60*minuteControl + secondsControl
    let timesTimeDecrease = Math.floor(lengthTrace / 120)
    let totalDecreased = timesTimeDecrease * 2.5
    let timeAchieved = (lengthTrace / 100) * secondsPer100Meters - totalDecreased

    if (timeAchieved <= controlTimeInSeconds){
        console.log("Marin Bangiev won an Olympic quota!")
        console.log(`His time is ${timeAchieved.toFixed(3)}.`)
    }
    else{
        let neededSeconds = timeAchieved - controlTimeInSeconds
        console.log(`No, Marin failed! He was ${neededSeconds.toFixed(3)} second slower`)
    }

}
