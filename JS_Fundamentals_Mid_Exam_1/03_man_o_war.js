function solve(input){
    let pirateShip = input[0].split(">").map(Number)
    let warship = input[1].split(">").map(Number)
    let maximumHealth = Number (input[2])

    console.log(pirateShip)
    console.log(warship)
    console.log(maximumHealth)

    let idx = 3
    while (true){
        let commandLine = input[idx].split(" ")
        if (commandLine[0] === "Retire"){
            break
        }else{
            console.log(commandLine)
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
