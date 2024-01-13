

function solve(stringInput){
    function check(word){
        for (let i = 0; i < word.length;i++){
            let chCode = word.charCodeAt(i)
            if (!((chCode>=65 && chCode <= 90) || (chCode>=97 && chCode <= 122))){
                return false
            }
        }
        return true
    }
    
    let specialWords = []
    let wordsAsArr = stringInput.split(" ")
    for (let w of wordsAsArr){
        if (w.startsWith('#') && w.length > 1){
            let wordToCheck = w.substring(1)
            let statement = check(wordToCheck)
            if (statement){
                specialWords.push(wordToCheck)
            }
        }
    }
    specialWords.forEach(element => {
        console.log(element)
    })
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
console.log("--//--")
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')