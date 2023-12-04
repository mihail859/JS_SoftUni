function printTime(){
    for (let hour = 0; hour < 24; hour++){
        for (let minutes = 0; minutes <= 59; minutes++){
            console.log(`${hour}:${minutes}`)
        }
    }
}

printTime()