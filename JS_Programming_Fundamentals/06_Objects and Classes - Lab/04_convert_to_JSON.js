function solve(firstName, lastName, hairColor){
    let personObj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let jsonString = JSON.stringify(personObj)
    console.log(jsonString)
}

solve('George', 'Jones', 'Brown')