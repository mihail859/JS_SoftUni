function solve(input){
    let mapList = new Map()

    for (let row of input){
        let [product, quantity] = row.split(" ")
        if (!mapList.has(product)){
            mapList.set(product, Number(quantity))
        }else{
            let currValue = mapList.get(product)
            let newValue = currValue + Number(quantity)
            mapList.set(product, newValue)
        }
    }
    mapList.forEach((value, key) =>{
        console.log(`${key} -> ${value}`)
    })
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)