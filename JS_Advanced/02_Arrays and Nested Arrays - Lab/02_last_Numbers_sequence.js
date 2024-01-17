function fibonacci_sequence(n, k){
    let arr = [1]

    for (let i = 1;i <n; i++){
        let newElement = arr.slice(-k).reduce((sum, a) => sum += a, 0)
        arr.push(newElement)

    }
    return arr

}

console.log(fibonacci_sequence(6, 3))
console.log("--//--")
fibonacci_sequence(8,2)