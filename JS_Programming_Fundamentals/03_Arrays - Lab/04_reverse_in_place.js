function reverseInPlace(arrayOfStrings){
    for (let i = 0; i<arrayOfStrings.length / 2; i++){
        let element = arrayOfStrings[i]
        let replacement = arrayOfStrings[arrayOfStrings.length-1 - i]
        arrayOfStrings[i] = replacement
        arrayOfStrings[arrayOfStrings.length-1 - i] = element
    }
    console.log(arrayOfStrings.join(" "))
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])