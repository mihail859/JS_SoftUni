function printCharactersBetween(char1, char2){
    let asciiValueFirst = char1.charCodeAt(0)
    let asciiValueSecond = char2.charCodeAt(0)

    if (asciiValueFirst > asciiValueSecond) {
        // Swap values if the first ASCII value is greater than the second
        [asciiValueFirst, asciiValueSecond] = [asciiValueSecond, asciiValueFirst];
    }

    let printArray = []
    const  returnChar = (value) => String.fromCharCode(value);
    for (let i = asciiValueFirst + 1; i < asciiValueSecond; i++){
        let character = returnChar(i)
        printArray.push(character)
    }
    console.log(printArray.join(" "))

}    
printCharactersBetween('C', '#'
)