function calculate(input){
    let annualPrice = Number (input[0])

    let shoesPrice = annualPrice * 0.60
    let equipment = shoesPrice * 0.80
    let ballPrice = 0.25 * equipment
    let accessories = 0.20 * ballPrice

    let totalPrice = shoesPrice + annualPrice + equipment + ballPrice + accessories
    console.log(`${totalPrice.toFixed(2)}`)
    

}

calculate(["320"])
calculate(["550"])
calculate(["230"])