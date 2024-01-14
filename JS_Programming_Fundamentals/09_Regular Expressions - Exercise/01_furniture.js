function calculatePrice(arr) {
    const pattern = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/g;
    let furnitureList = [];
    let totalSum = 0;

    for (let row of arr) {
        let result = pattern.exec(row)

        while (result !== null){

            let item = result.groups.item
            let price = Number (result.groups.price)
            let quantity = Number (result.groups.quantity)

            let productPrice = price * quantity
            furnitureList.push(item)
            totalSum += productPrice

            result = pattern.exec(row)
        }
    }

    console.log(`Bought furniture:`);
    if (furnitureList.length >= 1){
        console.log(furnitureList.join("\n"))
    }
    console.log("Total money spend:", totalSum.toFixed(2));
}

calculatePrice(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']

);
