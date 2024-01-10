function printOddOccurrences(stringInput) {

    let words = stringInput.split(" ")

    let occurrencesList = {}

    for (let word of words) {
        let lowerCaseWord = word.toLowerCase()
        if (!occurrencesList.hasOwnProperty(lowerCaseWord)) {
            occurrencesList[lowerCaseWord] = 1
        } else {
            occurrencesList[lowerCaseWord] += 1
        }
    }
    
    const filtered = Object.entries(occurrencesList).filter(([key, value]) => value % 2 !== 0).sort((a,b) => b[1] - a[1])
    let arr = []
    filtered.forEach(double => {
        arr.push(double[0])
    })
    console.log(arr.join(" "))

    /*
    let numberKeys = [];
    let nonNumberKeys = [];

    for (let key in occurrencesList) {
        if (isNaN(Number(key))) {
            nonNumberKeys.push(key);
        } else {
            numberKeys.push(key);
        }
    }
    const sortedKeys = nonNumberKeys.concat(numberKeys);
    let sortedOutput = sortedKeys.filter(w => occurrencesList[w] % 2 !== 0)
    console.log(sortedOutput.join(" "))
    */
}

printOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')