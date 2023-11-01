function convert(input){
    let firstTime = Number (input[0])
    let secondTime =Number (input[1])
    let thirdTime = Number (input[2])

    let sumSeconds = firstTime + secondTime + thirdTime
    let result = ""
    if (sumSeconds < 60 && sumSeconds >= 10) {
        result += `0:${sumSeconds}`
    }
    else if(sumSeconds < 10){
        result += `0:0${sumSeconds}`
    }
    else{
        let minutes = parseInt(sumSeconds / 60)
        let seconds =  parseInt(sumSeconds % 60)
        if (seconds < 10){
            result += `${minutes}:0${seconds}`
        } 
        else{
            result += `${minutes}:${seconds}`
        }
    }
    console.log(result)

}

convert(["35",
"45",
"44"])

convert(["22", "7", 
"34"])

convert(["50",
"50",
"49"])

convert(["14", "12",
"10"])

convert(
    [
        "1", 
        "2",
        "3"
    ]
)