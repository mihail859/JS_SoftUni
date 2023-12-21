function timeNeeded(pages, pagesPerHour, daysLimitToRead){
    let neededHoursToReadTheBook = pages / pagesPerHour
    let requiredHours = neededHoursToReadTheBook / daysLimitToRead
    console.log(`${requiredHours.toFixed(1)}`)
}
timeNeeded(212,
    20 ,
    2 
    )