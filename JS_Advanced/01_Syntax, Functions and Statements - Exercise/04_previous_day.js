function previousDay(year, month, day){
    let currentDate = new Date (year, month -1, day)
    currentDate.setDate(currentDate.getDate() - 1)
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()  +1 }-${currentDate.getDate()}`)
}   

previousDay(2016, 9, 30)
console.log("--//--")
previousDay(2015, 5, 10)