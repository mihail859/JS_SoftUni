function displayNumbersInRange(start, end){
    let sumNumbers = 0
    let numbersRow = ""

    for (let i = start; i <= end; i++){
        numbersRow += i + " "     
        sumNumbers += i
    }
    console.log(numbersRow)
    console.log(`Sum: ${sumNumbers}`)

}
displayNumbersInRange(5, 10)