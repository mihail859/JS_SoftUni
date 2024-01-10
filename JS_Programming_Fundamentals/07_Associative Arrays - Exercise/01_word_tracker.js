function countOccurrences(input){

    let occurrencesList = {}

    let searchedWords = input.shift().split(" ")

    for (searched of searchedWords){
        occurrencesList[searched] = 0
    }

    for (let word of input){
        if (occurrencesList.hasOwnProperty(word)){
            occurrencesList[word] += 1
        }
    }
    
    const sortedEntries = Object.entries(occurrencesList).sort((a,b) => b[1] - a[1])
    const sortedList = Object.fromEntries(sortedEntries)

    for (let [key, value] of Object.entries(sortedList)){
        console.log(`${key} - ${value}`)
    }
    
}

countOccurrences([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )