function distinctArray(repeatingArray){
    let distinctArrayPrint = Array.from(new Set(repeatingArray))
    console.log(distinctArrayPrint.join(" "))
}

distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])