function printTriple(n){
    n+=97
    for(let i = 97; i < n; i++){
        for(let j= 97; j <n; j++){
            for(let k= 97; k < n; k++){
                console.log(String.fromCharCode(i,j,k))
            }
        }
    }
}

printTriple(3)