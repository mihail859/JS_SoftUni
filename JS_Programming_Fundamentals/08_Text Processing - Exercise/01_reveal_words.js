function reveal(stringW, text){
    let wordArr = stringW.split(", ")
    for (let word of wordArr){
        let wordHidden = '*'.repeat(word.length)
        text = text.replace(wordHidden, word)
    }
    console.log(text)
}

reveal('great, learning',
'softuni is ***** place for ******** new programming languages'
)