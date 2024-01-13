function solve(string) {
    let wordsArr = [];
    let currentWord = '';

    for (let char of string) {
        if (char === char.toUpperCase()) {
            if (currentWord.length > 0) {
                wordsArr.push(currentWord);
                currentWord = '';
            }
        }
        currentWord += char;
    }

    if (currentWord.length > 0) {
        wordsArr.push(currentWord);
    }

    console.log(wordsArr.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');






