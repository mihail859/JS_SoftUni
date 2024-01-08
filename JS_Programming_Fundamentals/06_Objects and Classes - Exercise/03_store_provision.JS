function storeProvision(firstArray, secondArray){

    let localeStorage = {}

    for (let i = 0; i < firstArray.length; i+=2){
        let product = firstArray[i]
        let quantity = Number (firstArray[i+1])

        localeStorage[product] = quantity
    }
    
    for (let j = 0; j < secondArray.length; j+=2){
        let product = secondArray[j]

        if(!localeStorage.hasOwnProperty(product)){
            localeStorage[product] = 0
        }
        localeStorage[product] += Number (secondArray[j+1])
    }

    for (let [item, amount] of Object.entries(localeStorage)){
        console.log(`${item} -> ${amount}`)
    }   

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )