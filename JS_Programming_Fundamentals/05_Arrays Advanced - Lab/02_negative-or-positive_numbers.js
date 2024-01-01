function solve(arrayToSort){
    let arrayToSort1 = arrayToSort.map(Number)
    let result = []

    for (let currNumber of arrayToSort1){
        if (currNumber >= 0){
            result.push(currNumber)
        }
        else{
            result.unshift(currNumber)
        }
    }
    console.log(result.join("\n"))
}

solve(['7', '-2', '8', '9'])