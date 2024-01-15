function daysInAMonth(month, year){
    const date = new Date(year, month, 0);
    let daysInAMonth = date.getDate()
    console.log(daysInAMonth)
}

daysInAMonth(1, 2012)
console.log("--//--")
daysInAMonth(2, 2021)