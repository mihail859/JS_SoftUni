function showStatistics(input){

    let won = 0
    let draw = 0
    let lost = 0
    
    for (let idx = 0; idx < input.length; idx++){
        let currentResult = input[idx]
        let scored = Number (currentResult[0])
        let concerned = Number (currentResult[2])

        if (scored > concerned){
            won++
        }
        else if (concerned > scored){
            lost++
        }
        else{
            draw++
        }
    }   

    console.log(`Team won ${won} games.`)
    console.log(`Team lost ${lost} games.`)
    console.log(`Drawn games: ${draw}`)
    
}

showStatistics(["3:1",
"0:2",
"0:0"])
