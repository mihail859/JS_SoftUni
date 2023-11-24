function sequenceNumbers(input){
    let n = Number (input[0])

    for (let i = 1; i <= n; i = (i * 2) + 1){
        console.log(i)
    }
}   
sequenceNumbers(["31"])
sequenceNumbers(["8"])