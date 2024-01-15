function sumNumbers(n, m){
    n = Number (n)
    m = Number (m)

    let result = 0

    for (let i = n; i <= m; i++){
        result += i
    }
    return result
}

console.log(sumNumbers('1', '5' ))