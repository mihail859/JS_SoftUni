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
            for (let i = startIndex; i <= endIndex; i++) {
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

    let idx = 3
    while (true){
        let commandLine = input[idx].split(" ")
        if (commandLine[0] === "Retire"){
            break
        }
        else if (commandLine[0] === "Fire"){
            let i = Number (commandLine[1])
            let damageGiven = Number (commandLine[2])
            warship = fire(warship, i, damageGiven)
            if (!warship){
                console.log("You won! The enemy ship has sunken.")
                break
            }
        }
        else if(commandLine[0] === "Defend"){
            let startIndex = Number (commandLine[1])
            let endIndex = Number (commandLine[2])
            let damageGiven = Number (commandLine[3])
            pirateShip = defend(pirateShip, startIndex, endIndex, damageGiven)

        }


        idx++;

    }
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
