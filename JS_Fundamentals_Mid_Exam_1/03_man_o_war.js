function solve(input){
    let pirateShip = input[0].split(">").map(Number)
    let warship = input[1].split(">").map(Number)
    let maximumHealth = Number (input[2])

    function fire(warshipList, index, damage){
        if (index >= 0 && index < warshipList.length){
            warshipList[index] -= damage
            if (warshipList[index] <= 0){
                return false
            }
            else{
                return warshipList
            }
        }
        return warshipList
    }


    function defend(pirateShipList, idxStart, idxStop, damage){
        if ((idxStart >= 0 && idxStart < pirateShipList.length) && (idxStop >= 0 && idxStop < pirateShipList.length)){
            for (let i = idxStart; i <= idxStop; i++) {
                pirateShipList[i] -= damage;
                if (pirateShipList[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return false;
                }
            }
            return pirateShipList
        }
        return pirateShipList
    }    


    function repair(pirateShipList, index, healthGiven){
        pirateShipList[index] += healthGiven
        if (pirateShipList[index] > maximumHealth){
            pirateShipList[index] = maximumHealth
        }
        return pirateShipList
    } 


    function status(pirateShipList){
        let neededRepairList  = []
        for (let el of pirateShipList){
            if (el < maximumHealth*0.20){
                neededRepairList.push(el)
            }
        }
        let neededRepairCount = neededRepairList.length
        console.log(`${neededRepairCount} sections need repair.`)
    }

    function sumPirateShip(pirateShipList){
        let sumPirate = pirateShipList.reduce((sum, a) => sum += a, 0)
        console.log(`Pirate ship status: ${sumPirate}`)
    }
    function sumWarship(warshipList){
        let sumWarship = warshipList.reduce((sum, a) => sum += a, 0)
        console.log(`Warship status: ${sumWarship}`)
    }

    let idx = 3
    while (true){
        let commandLine = input[idx].split(" ")
        if (commandLine[0] === "Retire"){


            sumPirateShip(pirateShip)
            sumWarship(warship)


            break
        }
        else if (commandLine[0] === "Fire"){
            let i = Number (commandLine[1])
            let damageGiven = Number (commandLine[2])
            warship = fire(warship, i, damageGiven)
            if (warship === false){
                console.log("You won! The enemy ship has sunken.")
                break
            }
        }
        else if(commandLine[0] === "Defend"){
            let startIndex = Number (commandLine[1])
            let endIndex = Number (commandLine[2])
            let damageGiven = Number (commandLine[3])
            pirateShip = defend(pirateShip, startIndex, endIndex, damageGiven)

            if (pirateShip === false){
                break
            }

        }
        else if (commandLine[0] === "Repair"){
            let i = Number (commandLine[1])
            let health = Number (commandLine[2])

            pirateShip = repair(pirateShip, i, health)

        }
        else {
            status(pirateShip)
        }


        idx++;

    }
    console.log(pirateShip)
    console.log(warship)
}

solve(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])



