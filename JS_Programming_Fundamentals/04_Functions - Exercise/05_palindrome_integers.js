function palindromeIntegers(arrayWithNumbers){
    const reversedWord = (word) => word.split("").reverse().join("");

    for (let i = 0; i < arrayWithNumbers.length; i++){
        let currentNumberAsString = arrayWithNumbers[i].toString()
        let reverseWord = reversedWord(currentNumberAsString)
        if (currentNumberAsString === reverseWord){
            console.log('true')
        }   
        else{
            console.log('false')
        }
    }
}

palindromeIntegers([123,323,421,121])