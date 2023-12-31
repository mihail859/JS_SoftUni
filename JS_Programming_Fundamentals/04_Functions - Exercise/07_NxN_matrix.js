function printPattern(n){
    n = Number(n)
    for (let i = 1; i <= n; i++){
        let output= ""
        for (let j = 1; j <= n; j++){
            output += `${n} `
        }
        console.log(output)
    }    
}
printPattern(3)
console.log("--//--")
printPattern(7)
console.log("--//--");
