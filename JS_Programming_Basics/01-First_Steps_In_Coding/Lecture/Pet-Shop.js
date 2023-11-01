function zooShop(input){
    let catFood = 4
    let dogFood = 2.50

    let dogFoodPackage = Number (input[0])
    let CatFoodPackage = Number (input[1])

    let totalFood = catFood * CatFoodPackage + dogFood * dogFoodPackage

    console.log(`${totalFood} lv.`)
}
zooShop(["5 ",
"4 "]
)
zooShop(
    ["13",
"9"]
)