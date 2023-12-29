function solve(arrayData){
    let initialHealth = 100
    let coins = 0
    let dataInput = arrayData[0]
    let dataArray = dataInput.split("|")
    let isSurvived = true

    for (let data of dataArray){

        let splitDataArray = data.split(" ")
        let itemOrMonster = splitDataArray[0]
        let number = Number (splitDataArray[1])

        if (itemOrMonster === "potion"){
            if (initialHealth < 100){
                let healedPoints
                if (initialHealth + number > 100){
                    healedPoints = 100-initialHealth
                    initialHealth = 100
                }
                else{
                    initialHealth += number
                    healedPoints = number
                }
                console.log(`You healed for ${healedPoints} hp.`)
            }
            else{
                console.log(`You healed for 0 hp.`)
            }
            console.log(`Current health: ${initialHealth} hp.`)
        }
        else if (itemOrMonster === "chest"){
            coins += number
            console.log(`You found ${number} coins.`)
        }
        else{
            initialHealth -= number
            if (initialHealth > 0){
                console.log(`You slayed ${itemOrMonster}.`)
            }
            else{
                console.log(`You died! Killed by ${itemOrMonster}.`)
                let  index = dataArray.indexOf(data);
                console.log(`Best room: ${index+1}`)
                isSurvived = false
                break
            }
        }

    }
    if (isSurvived){
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${initialHealth}`)
    }
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])