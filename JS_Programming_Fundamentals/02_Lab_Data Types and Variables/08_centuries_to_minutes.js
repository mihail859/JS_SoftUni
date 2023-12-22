function convert(centuries){
    let years = centuries * 100
    let days = years * 365.24220
    let hours = days * 24
    let minutes = hours * 60

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}

convert(1)
convert(5)