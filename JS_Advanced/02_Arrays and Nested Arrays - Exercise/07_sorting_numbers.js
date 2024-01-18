function sortNumbers(arr) {
    let copy = arr.slice()
    let sortedArr = []

    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 0){
            let sortedAsc = copy.sort((a, b) => a-b)
            let toAdd = sortedAsc.shift()
            sortedArr.push(toAdd)
            copy = sortedAsc
        }else{
            let sortedDesc = copy.sort((a, b) => b-a)
            let toAdd = sortedDesc.shift()
            sortedArr.push(toAdd)
            copy = sortedDesc
        }
    }
    return sortedArr
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log("--//--")
console.log(sortNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));