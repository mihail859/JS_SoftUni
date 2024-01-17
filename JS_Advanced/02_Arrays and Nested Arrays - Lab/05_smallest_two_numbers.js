function printTheTwoSmallest(arr){
    arr.sort((a, b) => a-b)
    let result = arr.slice(0, 2)
    console.log(result.join(" "));
}

printTheTwoSmallest([30, 15, 50, 5])
console.log("--/-/--")
printTheTwoSmallest([3, 0, 10, 4, 7, 3])