function censored(text, bannedWord){
    let replacement = '*'.repeat(bannedWord.length)
    while (text.includes(bannedWord)){
        text = text.replace(bannedWord, replacement)
    }
    console.log(text)
}

censored('A small sentence with some words', 'small')