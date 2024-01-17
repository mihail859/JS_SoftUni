function doubleOddPositionsNumbers(arr){
    const filterArr = arr.filter((v, i) => i % 2 !== 0)
                          .map(n => n * 2)
                          .reverse()
    return filterArr                      
    
}

console.log(doubleOddPositionsNumbers([10, 15, 20, 25]))
console.log("--//--")
console.log(doubleOddPositionsNumbers([3, 0, 10, 4, 7, 3]))