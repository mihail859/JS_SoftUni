function drawPyramid(input){
    let n = Number (input[0])
    let number = 0
    let printLine = ""

    
    for (row = 1; row <= n; row++){
        for (let col = 1; col <= row; col++){
            number++;
            printLine += " " + number
        }
        console.log(printLine)
        printLine = ""
    }
}

drawPyramid(["7"])
/*drawPyramid(["12"])
drawPyramid(["15"])*/