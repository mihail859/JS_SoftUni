function findSmallestNumbers(arrayInput){
    let output = arrayInput.sort((a, b) => a-b).slice(0, 2).join(" ")
    console.log(output)
}
findSmallestNumbers([30, 15, 50, 5])