function sumFirstAndLastElements(arr){
    arr = arr.map(Number)
    let first = arr.shift()
    let last = arr.pop()
    const result = first + last

    console.log(result)
}

sumFirstAndLastElements(['20', '30', '40'])