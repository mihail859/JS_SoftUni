function calclulate(input){
    let annualTax = Number (input[0])

    let basketballShoes = 0.60 * annualTax
    let basketballShirt = 0.80 * basketballShoes
    let ball = 0.25 * basketballShirt
    let acseesories = 0.20 * ball

    let totalExpences = basketballShoes + basketballShirt + ball + acseesories + annualTax
    console.log(totalExpences)
}

calclulate(
    ["550 "]
)