function relocation(input){
    
    let width = Number (input[0])
    let length = Number (input[1])
    let height = Number (input[2])

    let cubicMetersSpace = width * length * height
    let idx = 3
    while (true){
        command = input[idx]
        if (command === "Done"){
            console.log(`${cubicMetersSpace} Cubic meters left.`)
            break
        }
        let meters = Number (command)
        cubicMetersSpace -= meters
        if (cubicMetersSpace < 0){
            console.log(`No more free space! You need ${Math.abs(cubicMetersSpace)} Cubic meters more.`)
            break
        }
        idx++;
    }

}

relocation(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

relocation(["10", 
"1",
"2",
"4", 
"6",
"Done"])

