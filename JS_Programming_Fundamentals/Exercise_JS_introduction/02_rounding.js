function roundNumber(number, precision){
    if (precision > 15){
        precision = 15
    }
    let rounded = parseFloat(`${number.toFixed(precision)}`)
    console.log(rounded)
}
roundNumber(3.1415926535897932384626433832795,2)
roundNumber(10.5,3)