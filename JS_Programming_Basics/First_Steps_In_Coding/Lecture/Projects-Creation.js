function projectCreation(input){
    let architectName = input[0]
    let projects = Number (input[1])

    let neededHours = projects * 3
    console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${projects} project/s.`)
}

projectCreation(["Sanya ",
"9 "]
)
