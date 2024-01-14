function race(arr){
    let participants = arr.shift().split(", ")
    arr.pop()

    const patternName = /[A-Za-z]/g
    const patternDigit = /\d/g
    let playersDict = {}

    for (let row of arr){
        let player = row.match(patternName).join("")
        let distance = row.match(patternDigit)
        .map(Number)
        .reduce((sum, a) => sum += a, 0)
        if (participants.includes(player)){
            if (!playersDict.hasOwnProperty(player)){
                playersDict[player] = 0
            }
    
            playersDict[player] += distance
        }
        
    }

    let sortedObjEntries = Object.entries(playersDict).sort((a, b) => b[1] - a[1])
    let newObj = Object.fromEntries(sortedObjEntries)
    let sortedKeys = Object.keys(newObj)
    
    console.log(`1st place: ${sortedKeys[0]}`);
    console.log(`2nd place: ${sortedKeys[1]}`);
    console.log(`3rd place: ${sortedKeys[2]}`)
    
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)