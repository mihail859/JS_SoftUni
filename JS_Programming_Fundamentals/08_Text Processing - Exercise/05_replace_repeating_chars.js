function replaceChars(stringInput){
    let charsArray = stringInput.split("")
    let first = charsArray[0]
    let outputString = [first]

    for (let i = 1; i < charsArray.length; i++){
        let previous = charsArray[i-1]
        let current = charsArray[i]
        if (previous !== current){
            outputString.push(current)
        }
    }
    console.log(outputString.join(""));
}   

replaceChars('aaaaabbbbbcdddeeeedssaa')