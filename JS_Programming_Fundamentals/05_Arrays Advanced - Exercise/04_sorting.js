function sortArray(arrayToSort){
    let biggestToSmallest = arrayToSort.slice().sort((a, b) => a-b)
    let sortedArray = []
    let arrayLength = arrayToSort.length
    
    for (let i = 0; i < arrayLength/2; i++){
        let currentElement = biggestToSmallest.pop()
        let nextElement = biggestToSmallest.shift()

        sortedArray.push(currentElement)
        sortedArray.push(nextElement)
    }

    console.log(sortedArray.join(" "))
     
}

sortArray([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])