function game(data){
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]]
    
    let isFirstPlayerPlays = true
    
    function checkDraw(playground){
        let arr = playground.flat().find(item => item === false)
        return arr !== false ? true : false
    }


    function isFinished(playground, sym){

        for (let i = 0; i < playground.length; i++){
            let row = playground[i]
            let countEl = 0
            for (el of row){
                if (el === sym){
                    countEl++;
                }
            }
            if (countEl === 3){
                return true
            }
            countEl = 0
            for (let j = 0; j<playground.length; j++){
                let currentPlaceToCheck = playground[j][i]
                if (currentPlaceToCheck === sym){
                    countEl++;
                }
            }
            if (countEl === 3){
                return true
            }
        }

        let firstD = []
        let secondD = []
        for (let d = 0; d <playground.length; d++){
            firstD.push(playground[d][playground.length - 1 - d])
            secondD.push(playground[d][d])
        }
        let count=0
        for (let k of firstD){
            if (k === sym){
                count++;
            }
        }
        if (count === 3){
            return true
        }
        count = 0
        for (k of secondD){
            if (k === sym){
                count++;
            }
        }
        if (count === 3){
            return true
        }
        return false
    }

    for (let coordinates of data){
        let dataToSplit = coordinates.split(" ")
        let x = Number(dataToSplit[0])
        let y = Number (dataToSplit[1])


        let chosenPlace = dashboard[x][y]
        let symbol = isFirstPlayerPlays ? "X" : "O"
        if (chosenPlace === false){
            dashboard[x][y] = symbol
        }else{
            console.log("This place is already taken. Please choose another!")
            continue
        }
        if(isFinished(dashboard, symbol)){
            console.log(`Player ${symbol} wins!`)
            //console.table(dashboard)
            break
        }
        if (checkDraw(dashboard)){
            console.log("The game ended! Nobody wins :(")
            //console.table(dashboard)
            break
        }
         
        isFirstPlayerPlays = !isFirstPlayerPlays
    }

    for (let row of dashboard){
        console.log(row.join("\t"))
    }
    
    
}


/*game(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);*/
/*
console.log("GameNew-----")
game(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);
*/

console.log("New game -----")
game(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)
