function game(input){
    let firstPlayerName = input[0]
    let secondPlaterName = input[1]

    let pointsFirst = 0
    let pointsSecond = 0

    for (let idx = 2; idx < input.length; idx += 2){
        if (input[idx] === "End of game"){
            console.log(`${firstPlayerName} has ${pointsFirst} points`)
            console.log(`${secondPlaterName} has ${pointsSecond} points`)
            break
        }
        let firstPlayerCard = Number (input[idx])
        let secondPlayerCard = Number (input[idx + 1])
        if (firstPlayerCard > secondPlayerCard){
            pointsFirst += firstPlayerCard - secondPlayerCard
        }
        else if (secondPlayerCard > firstPlayerCard){
            pointsSecond += secondPlayerCard - firstPlayerCard
        }
        else{
            let firstPlayerCard = Number (input[idx + 2])
            let secondPlayerCard = Number (input[idx + 3])
            console.log("Number wars!")
            if (firstPlayerCard > secondPlayerCard){
                console.log(`${firstPlayerName} is winner with ${pointsFirst} points`)
            }
            else{
                console.log(`${secondPlaterName} is winner with ${pointsSecond} points`)
                break
            }
        }

    }
}

game(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"])
