function calculateDiagonalSums(matrix){
    let firstDiagonalSum = 0
    let secondDiagonalSum = 0

    for (let row = 0; row < matrix.length; row++){

        firstDiagonalSum += matrix[row][row]
        secondDiagonalSum += matrix[row][matrix.length-1 - row]

    }

    console.log(firstDiagonalSum, secondDiagonalSum)
}

calculateDiagonalSums([[20, 40],
    [10, 60]]
   )
console.log("--//--")
calculateDiagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])   