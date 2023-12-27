function equal(array1, array2){
    let sum = 0
    let isEqual = true
    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isEqual = false
            break
        }
        else{
            sum += Number(array1[i])
        }
    }
    if (isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

equal(['10','20','30'], ['10','20','30'])
equal(['1','2','3','4','5'], ['1','2','4','4','5'])