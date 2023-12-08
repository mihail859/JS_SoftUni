function drawPyramid(input){
    let n = Number (input[0])
    let number = 0
    let printLine = ""

    let isBigger = false
    for (row = 1; row <= n; row++){
        for (let col = 1; col <= row; col++){
            number++;
            if (number > n){
                isBigger = true
                break
            }
            printLine += " " + number
        }
        console.log(printLine)
        printLine = ""
        if (isBigger){
            break
        }
    }
}

drawPyramid(["7"])
console.log()
drawPyramid(["12"])
console.log()
drawPyramid(["15"])