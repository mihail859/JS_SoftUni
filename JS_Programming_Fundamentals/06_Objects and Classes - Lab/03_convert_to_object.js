function convertToObject(stringJson){
    let obj = JSON.parse(stringJson)
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')