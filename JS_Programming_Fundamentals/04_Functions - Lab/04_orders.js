function priceOrder(product, quantityProduct){
    let obj;
    obj = {
        'coffee': (quantity) => quantity * 1.50,
        'water': (quantity) => quantity * 1.00,
        'coke': (quantity) => quantity * 1.40,
        'snacks': (quantity) => quantity * 2.00
    }
   let result = obj[product](quantityProduct)
   console.log(`${result.toFixed(2)}`)
}

priceOrder("water", 5)
priceOrder("coffee", 2)