function rotate(arrayNumbers, nRotations){
    for (let r = 1; r <= nRotations; r++){
        let removed = arrayNumbers[0]
        arrayNumbers.shift()
        arrayNumbers.push(removed)

    }
    console.log(arrayNumbers.join(' '))
}

rotate([51, 47, 32, 61, 21], 2)