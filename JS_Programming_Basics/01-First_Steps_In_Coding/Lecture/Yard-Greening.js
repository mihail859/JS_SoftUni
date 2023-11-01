function calculate(input){
    let pricePerSqrMeter = 7.61
    let SqrMeters = Number (input[0])

    let disscount = (pricePerSqrMeter * SqrMeters) * 0.18
    let totalSum = (pricePerSqrMeter * SqrMeters) - disscount

    console.log(`The final price is: ${totalSum} lv.`)
    console.log(`The discount is: ${disscount} lv.`)
}
calculate(["550"])
calculate(["150"])