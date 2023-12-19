function pyramidOfNumbers(n){
    let number = 1
    let printNumbers = ""
    
    for (let i = 1; i <= n; i++){
        for (j = 1; j <= i; j++){
            printNumbers += number + " "
        }

        console.log(printNumbers)
        printNumbers = ""
        number++;
    }   
}
pyramidOfNumbers(7)