function calculateCakePieces(input){
    let lengthCake = Number (input[0])
    let widthCake = Number (input[1])

    let cakePieces = lengthCake * widthCake
    let idx = 2

    while (true){
        let pieces = input[idx]
        if (pieces === "STOP"){
            console.log(`${cakePieces} pieces are left.`)
            break
        }
        let count = Number (pieces)

        cakePieces -= count
        if (cakePieces < 0){
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`)
            break
        }
        idx++;
    }
}

calculateCakePieces(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

calculateCakePieces(["10",
"2",
"2",
"4",
"6",
"STOP"])

