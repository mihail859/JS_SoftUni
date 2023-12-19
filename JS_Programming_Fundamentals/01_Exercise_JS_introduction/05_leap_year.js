function isYearLeap(year){
    let isDivisible = false
    if ((year % 4 == 0 & year % 100 != 0) | year % 400 === 0){
        isDivisible = true
    }
    if (isDivisible){
        console.log('yes')
    }
    else{
        console.log('no')
    }
}

isYearLeap(1984)
isYearLeap(2003)
isYearLeap(4)