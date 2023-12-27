function returnDay(dayNumber){
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (dayNumber >= 1 & dayNumber <= 7){
        let day = daysOfWeek[dayNumber-1]
        console.log(day)
    }
    else{
        console.log("Invalid day!")
    }
}
returnDay(7)
returnDay(4)
returnDay(-1)