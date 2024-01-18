function magic(matrix){


    let sumRows = []
    let sumColumns = []
    for (let i = 0; i < matrix.length; i++){
        let currentRowSum = matrix[i].reduce((sum, a ) => sum += a, 0)
        let currentColumnSum = 0
        for (let j = 0; j< matrix.length; j++){
            currentColumnSum += matrix[j][i]
        }
        sumRows.push(currentRowSum)
        sumColumns.push(currentColumnSum)
    }
    let setRowsSum = new Set(sumRows);
    let setColumnsSum = new Set(sumColumns)
    
    console.log(setColumnsSum)
    if ((setRowsSum.size === 1 && setColumnsSum.size === 1)){
        for (let sum of setRowsSum){
            console.log(sum);
        }
    }
}

console.log(magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));

console.log("--//- -")   

console.log(magic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));

console.log("--//- -") 

console.log([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);   




