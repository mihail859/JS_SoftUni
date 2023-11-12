function onTime(input){
    let hourExam = Number (input[0])
    let minuteExam = Number (input[1])

    let hourArrived = Number (input[2])
    let minuteArrived = Number (input[3])

    let timeInMinutesExam = hourExam * 60 + minuteExam
    let timeInMinutesArrived = hourArrived * 60 + minuteArrived

    let message = ""
    let info = ""
    let difference = Math.abs(timeInMinutesArrived - timeInMinutesExam)
    if (timeInMinutesArrived > timeInMinutesExam){
        message += "Late"
        if (difference < 60){
            info += `${difference} minutes after the start`
        }
        else{
            let hour = Math.floor(difference / 60)
            let minutes = difference % 60
            //hh:mm hours after the start
            if (minutes < 10){
                info += `${hour}:0${minutes} hours after the start`
            }
            else{
                info += `${hour}:${minutes} hours after the start`
            }
        }

    }
    else{

        if (difference <= 30){
            message += "On time"
        }
        else{
            message += "Early"
        }
        if (difference < 60){
            info += `${difference} minutes before the start`
        }
        else{
            let hour = Math.floor(difference / 60)
            let minutes = difference % 60
            //hh:mm hours after the start
            if (minutes < 10){
                info += `${hour}:0${minutes} hours before the start`
            }
            else{
                info += `${hour}:${minutes} hours before the start`
            }
        }
    }
    console.log(message)
    console.log(info)



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

onTime(["9",
"00",
"10",
"30"])


