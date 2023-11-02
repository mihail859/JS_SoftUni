function calculate(input){
    
    let budgetFilm = Number (input[0])
    let NumberOfStatists = Number (input[1])
    let dressPrice = Number (input[2])

    let decorPrice = 0.10 * budgetFilm
    let dressPriceTotal = dressPrice * NumberOfStatists
    if(NumberOfStatists > 150){
        dressPriceTotal *= 0.90
    }
    let expenses = decorPrice + dressPriceTotal
    let diff = Math.abs(expenses - budgetFilm)
    if (expenses > budgetFilm){
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }
    else{
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}
calculate(["20000",
"120",
"55.5"])

calculate(["15437.62",
"186",
"57.99"])
