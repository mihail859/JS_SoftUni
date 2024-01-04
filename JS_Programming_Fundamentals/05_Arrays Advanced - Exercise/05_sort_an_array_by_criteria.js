function sortByTwoCriteria(arrayToSort){
    let sortedArray = arrayToSort.sort((a, b) => {
        if (a.length !== b.length){
            return a.length - b.length
        }
        return a.localeCompare(b)
    })

    console.log(sortedArray.join("\n"))
}

sortByTwoCriteria(['alpha', 'beta', 'gamma'])
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])