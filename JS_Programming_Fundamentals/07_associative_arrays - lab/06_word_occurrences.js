function countOccurrences(arr) {
    let newMap = new Map()

    for (let word of arr) {
        if (!newMap.has(word)) {
            newMap.set(word, 1)
        }
        else {
            let occurrences = newMap.get(word)
            let newOccurrences = occurrences + 1
            newMap.set(word, newOccurrences)
        }
    }
    const sortedEntries = [...newMap.entries()].sort((a,b) => b[1] - a[1])
    const sortedMap = new Map(sortedEntries)

    sortedMap.forEach((value, key) => {
        console.log(`${key} -> ${value} times`)
    })
}

countOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])