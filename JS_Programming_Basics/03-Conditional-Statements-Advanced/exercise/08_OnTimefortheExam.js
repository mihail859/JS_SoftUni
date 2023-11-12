function onTime(input){
    let hourExam = Number (input[0])
    let minuteExam = Number (input[1])

    let hourArrived = Number (input[2])
    let minuteArrived = Number (input[3])

    let timeInMinutesExam = hourExam * 60 + minuteExam
    let timeInMinutesArrived = hourArrived * 60 + minuteArrived

    let message = ""
    if (timeInMinutesArrived > timeInMinutesExam){
        message += "Late"
    }
    else{
        let difference = Math.abs(timeInMinutesArrived - timeInMinutesExam)
        if (difference <= 30){
            message += "On time"
        }
        else{
            message += "Early"
        }
    }
    console.log(message)
}
onTime(["9",
"30",
"9",
"50"])

onTime(["9",
"00",
"8",
"30"])

onTime(["16",
"00",
"15",
"00"])

