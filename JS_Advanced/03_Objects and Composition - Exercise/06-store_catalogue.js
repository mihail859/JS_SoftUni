function storeCatalogue(arr){

    const catalogueObj = {}
    let sortedObj = {}

    for (let row of arr){
        let [product, price] = row.split(" : ")
        price = Number (price)

        let startingLetter = product.substring(0, 1).toUpperCase()
        
        if (!catalogueObj.hasOwnProperty(startingLetter)){
            catalogueObj[startingLetter] = {}
        }
        catalogueObj[startingLetter][product] = price
    }

    let sortedFirstLetters = Object.keys(catalogueObj).sort((a, b) => a.localeCompare(b))
    for (let key of sortedFirstLetters){
        let objProducts = Object.entries(catalogueObj[key]).sort((a, b) => a[0].localeCompare(b[0]))
        sortedObj[key] = Object.fromEntries(objProducts)
    }
    
    for (let [key, value] of Object.entries(sortedObj)){
        console.log(`${key}`)
        for (let k in value){
            console.log(`  ${k}: ${value[k]}`)
        }
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)