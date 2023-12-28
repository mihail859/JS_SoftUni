function solve(arrayNumbers){
    let sumBefore = 0
    let sumAfter = 0

    for (let i = 0; i < arrayNumbers.length; i++){
        let currentElement = arrayNumbers[i]
        sumBefore += currentElement
        if (currentElement % 2 === 0){
            currentElement += i
        }
        else{
            currentElement -= i
        }
        arrayNumbers[i] = currentElement
        sumAfter += currentElement

    }

    console.log(arrayNumbers)
    console.log(sumBefore)
    console.log(sumAfter)
}