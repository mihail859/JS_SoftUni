function extractIncreasingSubset(arr){
    
    let biggest = arr.shift()
    let arrResult = [biggest]
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>= biggest){
            biggest = arr[i]
            arrResult.push(biggest)
        }
    }
    return arrResult
}

console.log(extractIncreasingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
