function findBiggestNumber(matrix){
    let arrWithMaxNumbers = []
    
    for (let row of matrix){
        let biggest = Math.max(...row)
        arrWithMaxNumbers.push(biggest)
    }
    let biggestOfAll = Math.max(...arrWithMaxNumbers)
    return biggestOfAll
}

console.log(findBiggestNumber([[20, 50, 10],
    [8, 33, 145]]
   ))
console.log("*--//---")
console.log(findBiggestNumber([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))   