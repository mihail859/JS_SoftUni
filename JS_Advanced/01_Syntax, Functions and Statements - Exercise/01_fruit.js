function calculatePrice(fruit, weightInGrams, pricePerKg){
    let weightInKg = weightInGrams / 1000
    let price = weightInKg * pricePerKg
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

calculatePrice('orange', 2500, 1.80)