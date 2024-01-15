function drawSquare(n){
    for (let i = 1; i <= n; i++){
        console.log('* '.repeat(n).trim())
    }
}
drawSquare(1)
console.log("--/*/--")
drawSquare(4)