function sumEvenPositions(arr){
    arr = arr.filter((value, idx) => idx % 2 === 0).join(" ")
    console.log(arr)
}

sumEvenPositions(['20', '30', '40', '50', '60'])