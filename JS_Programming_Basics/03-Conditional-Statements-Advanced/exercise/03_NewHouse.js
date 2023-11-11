function calculate(input){
    let flower = input[0]
    let numberOfFlowers = Number (input[1])
    let budget = Number (input[2])

    let flowersArray = {
        "Roses": 5,
        "Dahlias": 3.80,
        "Tulips": 2.80,
        "Narcissus": 3,
        "Gladiolus": 2.50
    }
    let flowersTypes = ["Roses", "Dahlias", 
                        "Tulips", "Narcissus", 
                        "Gladiolus"]

    let price = numberOfFlowers * flowersArray[flower]
    if (flower === flowersTypes[0] & numberOfFlowers > 80){
        price *= 0.90
    }
    else if (flower === flowersTypes[1] & numberOfFlowers >90){
        price *= 0.85
    }
    else if (flower === flowersTypes[2] & numberOfFlowers > 80){
        price *= 0.85
    }
    else if (flower === flowersTypes[3] & numberOfFlowers < 120){
        price *= 1.15
    }
    else if (flower === flowersTypes[4] & numberOfFlowers < 80){
        price *= 1.20
    }
    /*Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left.*/
    let diff = Math.abs(price - budget)
    if (price <= budget){
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${diff.toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}
calculate(["Roses",
"55",
"250"])

calculate(["Tulips",
"88",
"260"])

calculate(["Narcissus",
"119",
"360"])

