function lowestPrice(arr){

    let productObj = {}

    for (let row of arr){
        let [town, product, price] = row.split(" | ")
        price = Number (price)

        if (!productObj.hasOwnProperty(product)){
            productObj[product] = {
                'town': town,
                'price': price
            }
        }
        else if (productObj[product]['price']> price){
            productObj[product]['town'] = town
            productObj[product]['price'] = price
        }
    }
    for (let [key, value] of Object.entries(productObj)){
        console.log(`${key} -> ${value['price']} (${value['town']})`)
    }   

}
lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)

console.log("--//---");