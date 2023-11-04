function showType(input){
    let item = input[0]

    let fruitArray = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"]
    let vegetableArray = ["tomato", "cucumber", "pepper", "carrot"]

    let typeItem = ""

    if (fruitArray.includes(item)){
        typeItem = "fruit"
    }
    else if (vegetableArray.includes(item)){
        typeItem = "vegetable"
    }
    else{
        typeItem = "unknown"
    }
    console.log(typeItem)
}

showType(["banana"])
showType(["apple"])
showType(["tomato"])
showType(["water"])