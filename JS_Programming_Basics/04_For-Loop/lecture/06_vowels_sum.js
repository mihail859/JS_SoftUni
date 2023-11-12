function vowelsSum(input){
    let word = input[0]
    let wordLength = word.length

    let vowelsValueArray = {
        "a":1,
    	"e": 2,
    	"i": 3,
        "o": 4,
        "u": 5
    }
    let vowelsSum = 0
    for (let i = 0; i < wordLength; i++){
        let letter = word[i]
        if (vowelsValueArray.hasOwnProperty(letter)){
            vowelsSum += vowelsValueArray[letter]
        }
    }
    console.log(vowelsSum)
}

vowelsSum(["hello"])
vowelsSum(["bamboo"])