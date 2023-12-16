function jump(input){
    let wellingHeight = Number (input[0])
    let startHeight = wellingHeight - 30

    let failedAttempts = 0
    let idx = 1
    let totalJumps = 0
    while (true){
        if (startHeight > wellingHeight){
            console.log(`Tihomir succeeded, he jumped over ${startHeight-5}cm after ${totalJumps} jumps.`)
            break
        }   
        for (i = 0; i < 3; i++){
            let jumpCurrent = Number (input[idx])
            totalJumps++;
            if (jumpCurrent > startHeight){
                failedAttempts = 0
                startHeight += 5

                break
            }
            else{
                idx++;
                failedAttempts++;

            }
                
        }
        if (failedAttempts === 3){
            console.log(`Tihomir failed at ${startHeight}cm after ${totalJumps} jumps.`)
            break
        }
        idx++

    }
}

jump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])
console.log('----------')
jump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])
