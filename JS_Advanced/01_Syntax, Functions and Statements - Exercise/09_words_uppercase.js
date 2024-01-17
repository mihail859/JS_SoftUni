function printWordsUpper(str){
    let words = str.split(/[^A-Za-z0-9]+/gm)
                   .join(" ")
                   .trim()
                   .split(" ")
                   .map(w => w = w.toUpperCase())
                   .join(", ")
    console.log(words)
}

printWordsUpper('Hi, how are you?')