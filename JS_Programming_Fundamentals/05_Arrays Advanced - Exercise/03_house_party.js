function party(arrayString){
    let partyPeopleGoing = []

    for (let message of arrayString){
        let splitData = message.split(" ")
        let name = splitData[0]
        if (splitData.length === 3){
            if (partyPeopleGoing.includes(name)){
                console.log(`${name} is already in the list!`)
            }
            else{
                partyPeopleGoing.push(name)
            }
        }
        else{
            if (partyPeopleGoing.includes(name)){
                let nameIdx = partyPeopleGoing.indexOf(name)
                partyPeopleGoing.splice(nameIdx, 1)
            }
            else{
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(partyPeopleGoing.join("\n"))
}

party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)