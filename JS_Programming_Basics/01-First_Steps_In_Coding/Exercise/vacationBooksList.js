function calculate(input){
    let pages = Number (input[0])
    let pagesReadPerHour = Number (input[1])
    let dayNormToReadTheBook = Number (input[2])

    let hoursToRead = pages / pagesReadPerHour
    let neededHoursPerDay = hoursToRead / dayNormToReadTheBook

    console.log(neededHoursPerDay)
}

calculate
(
    ["432 ",
    "15 ",
    "4 "]
    
)