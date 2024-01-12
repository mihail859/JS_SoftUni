function substringOfWord(word, start, count){
    let newWord = word.substring(start, count+start)
    console.log(newWord);
}

substringOfWord('ASentence', 1, 8)