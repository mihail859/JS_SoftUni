function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    var expensesCost = 0
    let shieldBreaks = 0
    for (let i =  1; i <= lostFights; i++ ){
        if (i % 2 === 0){
            expensesCost += helmetPrice
        }
        if (i % 3 === 0){
            expensesCost += swordPrice
        }
        if (i % 6 === 0){
            expensesCost += shieldPrice
            shieldBreaks++;
            if (shieldBreaks % 2 === 0){

                expensesCost += armorPrice

            }
        }
        
    }
    console.log(`Gladiator expenses: ${expensesCost.toFixed(2)} aureus`)
    
}

calculateExpenses(7,
    2,
    3,
    4,
    5
    )

calculateExpenses(23,
    12.50,
    21.50,
    40,
    200
    )