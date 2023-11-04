function calculateBill(input){
    let fruit = input[0]
    let day = input[1]
    let quantity = Number (input[2])

    let isDataOK = true;

    const fruits = ["banana", "apple", "orange", "grapefruit", "kiwi", "pineapple", "grapes"];
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (!fruits.includes(fruit) || !daysOfWeek.includes(day)){
        isDataOK = false;
        console.log("error")
    }

    if (isDataOK){

        let pricesArray = {
            "banana": 2.50,
            "apple": 1.20,
            "orange": 0.85,
            "grapefruit": 1.45,
            "kiwi": 2.70,
            "pineapple": 5.50,
            "grapes": 3.85
        }
        if (day === "Saturday" || day === "Sunday"){
            pricesArray.banana = 2.70
            pricesArray.apple = 1.25
            pricesArray.orange = 0.90
            pricesArray.grapefruit = 1.60
            pricesArray.kiwi = 3.00
            pricesArray.pineapple = 5.60
            pricesArray.grapes = 4.20
        }

        let bill = pricesArray[fruit] * quantity
        console.log(`${bill.toFixed(2)}`)
    }

}

calculateBill(["apple",
"Tuesday",
"2"])

calculateBill(["orange",
"Sunday",
"3"])

calculateBill(["kiwi",
"Monday",
"2.5"])

calculateBill(["grapes",
"Saturday",
"0.5"])

calculateBill(["tomato",
"Monday",
"0.5"])
