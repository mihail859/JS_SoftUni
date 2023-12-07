function seeBuilding(input){
    let floorsCount = Number (input[0])
    let roomsPerFloor = Number (input[1])
    let typeRoom = ""

    for (let floor = floorsCount; floor >= 1; floor--){
        if (floor === floorsCount){
            typeRoom = "L"
        }
        else if (floor % 2 === 0){
            typeRoom = "O"
        }
        else{
            typeRoom = "A"
        }
    }

}

seeBuilding(["6", "4"])