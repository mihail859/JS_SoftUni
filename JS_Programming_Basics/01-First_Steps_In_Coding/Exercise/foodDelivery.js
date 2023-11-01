
function calculate(input){
    let chickenMenuPrice = 10.35
    let fishMenuPrice = 12.40
    let veganMenu = 8.15

    let nChickenMenues = Number (input[0])
    let nFishMenues = Number (input[1])
    let nVeganMenues = Number (input[2])

    let mainMealPrice = nChickenMenues * chickenMenuPrice + fishMenuPrice * nFishMenues + veganMenu * nVeganMenues
    let dessert = 0.20 * mainMealPrice
    let totalPrice = mainMealPrice + dessert + 2.50
    console.log(totalPrice)
}
calculate(
    ["9 ",
    "2 ",
    "6 "]
    

)