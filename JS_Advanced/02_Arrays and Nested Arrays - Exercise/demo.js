let matrix = [
    ['O', 'X', 'X'],
    ['X', 'O', 'X'],
    ['O', false, 'O']
]
/*
let diagonal1 = []
let diagonal2 = []

for (let i = 0; i < matrix.length; i++){
    diagonal1.unshift(matrix[i][matrix.length -i - 1])
    diagonal2.unshift(matrix[i][i])
}
console.log(diagonal1)
console.log(diagonal2)
console.table(matrix)*/


let isFinished = false
let arr = matrix.flat().find(item => item === false)
console.log(arr);