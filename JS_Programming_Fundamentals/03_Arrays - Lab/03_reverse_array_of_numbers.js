function reverseArrayOfNumbers(n, arrayNumbers){
    let newArr = []
    for (let i=0; i < n; i++){
        newArr.push(arrayNumbers[i])
    }
    console.log((newArr.reverse()).join(" "))


}
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47])