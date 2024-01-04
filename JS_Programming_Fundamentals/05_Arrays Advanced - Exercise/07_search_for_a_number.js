function search(array1, array2){
    let numbersToTake = array2[0]
    let numbersToDelete = array2[1]
    let searchedNumber = array2[2]

    array1 = array1.slice(0, numbersToTake)
    array1.splice(0, numbersToDelete)
    let occurrences = array1.filter(el => el === searchedNumber).length
    console.log(`Number ${searchedNumber} occurs ${occurrences} times.`)

}

search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )