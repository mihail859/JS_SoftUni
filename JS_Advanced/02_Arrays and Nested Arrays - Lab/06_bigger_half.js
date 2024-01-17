function returnBiggerHalf(arr){
    arr.sort((a, b) => a -b)

    let secondHalf;
    if (arr.length % 2 === 0){
        secondHalf = arr.slice(arr.length / 2,)
        
    }else{
        secondHalf = arr.slice(Math.floor(arr.length / 2),)
        
    }
    return secondHalf
}

returnBiggerHalf([4, 7, 2, 5])
console.log("--//--")
returnBiggerHalf([3, 19, 14, 7, 2, 19, 6])

