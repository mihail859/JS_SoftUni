function record(input){
    let recordInSeconds = Number (input[0])
    let distanceInMeters = Number (input[1])
    let OneMeterTime = Number (input[2])

    let swimmingDistanceInSeconds = distanceInMeters * OneMeterTime
    let addedTime = Math.floor(distanceInMeters / 15) * 12.5
    swimmingDistanceInSeconds += addedTime

    let difference = Math.abs(swimmingDistanceInSeconds - recordInSeconds)
    if (recordInSeconds > swimmingDistanceInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${swimmingDistanceInSeconds.toFixed(2)} seconds.`)
    }
    else{
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`)
    }
}

record(["10464",
"1500",
"20"])

record(["55555.67",
"3017",
"5.03"])
