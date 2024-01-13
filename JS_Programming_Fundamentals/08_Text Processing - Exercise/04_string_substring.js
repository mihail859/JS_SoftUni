function subStringOfWord(word, text){
    wordCopy = word.toLowerCase()
    let textAsArr = text.split(" ")
    let isFound = false 
    for (let wordToCheck of textAsArr){
        if (wordToCheck.toLowerCase() === wordCopy){
            isFound = true
            console.log(word)
        }
    }   
    if (!isFound){
        console.log(`${word} not found!`)
    }
}

subStringOfWord('javascript',
'JavaScript is the best programming language'
)

subStringOfWord('python',
'JavaScript is the best programming language'
)