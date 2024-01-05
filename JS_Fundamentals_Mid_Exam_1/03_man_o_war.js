function solve(input){
    let pirateShip = input[0].split(">").map(Number)
    console.log(pirateShip)
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
