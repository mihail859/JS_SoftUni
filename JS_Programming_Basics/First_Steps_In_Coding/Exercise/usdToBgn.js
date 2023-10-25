function convert(input){
    let usdCourse = 1.79549 
    let usd = Number (input[0])

    let bgn = usd * usdCourse
    console.log(bgn)
}

convert(["12.5"])