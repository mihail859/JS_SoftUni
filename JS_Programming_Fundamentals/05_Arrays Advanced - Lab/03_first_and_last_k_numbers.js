function firstAndLastK(arrayInput){
    let n = arrayInput.shift()
    let firstKElements = arrayInput.slice(0, n)
    let lastKElements = arrayInput.slice(arrayInput.length - n)
    console.log(firstKElements.join(" "))
    console.log(lastKElements.join(" "))

}
firstAndLastK([2, 
    7, 8, 9]
    )

console.log("--///--")
firstAndLastK([3,
    6, 7, 8, 9]
   )
