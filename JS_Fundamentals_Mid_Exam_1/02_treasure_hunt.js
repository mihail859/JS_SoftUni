function solve(input){
    let initialLoot = input[0].split("|")


    function loot(lootList, item){
        if (lootList.includes(item)){
            return lootList
        }
        lootList.unshift(item)
        return lootList
    }

    function drop(lootList, index){
        if (index > 0 && index < lootList.length){
            let removedElement = lootList.splice(index, 1)
            lootList.push(removedElement)
            return lootList
        }
        return lootList
    }

    function steal(){

    }
    
    let idx=1
    while (true){
        let commandLine = input[idx].split(" ")
        if (commandLine[0] === "Yohoho!"){
            break
        }
        else if (commandLine[0] === "Loot"){
            for (let j = 1; j < commandLine.length; j++){
                let currentItem = commandLine[j]
                initialLoot = loot(initialLoot, currentItem)
            }
        }
        else if (commandLine[0] === "Drop"){
            let removedElementIndex = Number(commandLine[1])
            initialLoot = drop(initialLoot, removedElementIndex)
        }
        else{

        }
        idx++;
    }

}

solve(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
