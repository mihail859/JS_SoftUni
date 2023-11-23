function multiplicationTableByNumber(input){
    let number = Number (input[0])
    for (let n = 1; n <= 10; n++){
        let result = number * n
        console.log(`${n} * ${number} = ${result}`)
    }
}
multiplicationTableByNumber(["5"])