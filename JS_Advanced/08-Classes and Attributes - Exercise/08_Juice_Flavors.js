function calculateBottles(arr){
    let objQuantities = {}
    let madeBottlesObj = {}
    for (let row of arr){
        let [fruit, quantity] = row.split(' => ')
        if (!objQuantities.hasOwnProperty(fruit)){
            objQuantities[fruit] = 0;
        }
        objQuantities[fruit] += Number(quantity)

        if (objQuantities[fruit] >= 1000){
            let bottlesMade = Math.floor(objQuantities[fruit] / 1000);
            objQuantities[fruit] = objQuantities[fruit] % 1000
            if (!madeBottlesObj.hasOwnProperty(fruit)){
                madeBottlesObj[fruit] = 0
            }
            madeBottlesObj[fruit] += bottlesMade
        }
    }
    for (let [f, b] of Object.entries(madeBottlesObj)){
        console.log(`${f} => ${b}`)
    }

    
}

const inputDataJuice = ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
calculateBottles(inputDataJuice);

const secondInput = ['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'];
calculateBottles(secondInput)