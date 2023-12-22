function printTriple(n){
    n = Number (n)
    n+= 97
    for(let i = 97; i < n; i++){
        for(let j= 97; j <n; j++){
            for(let k= 97; k < n; k++){
                let output = String.fromCharCode(i,j,k)
                console.log(output)
            }
        }
    }
}

printTriple(3)