function arrayManipulations(data){
    let stringInput = data[0].split(" ").map(Number)

    function addNumber(arrayGiven, number){
        arrayGiven.push(number)
        return arrayGiven
    }

    function removeAllOccurrences(arrayGiven, number){
        arrayGiven = arrayGiven.filter(el => el !== number)
        return arrayGiven
    }

    function removeAt(array, index){
        array.splice(index, 1)
        return array
    }
    function addElement(array, number, index){
        array.splice(index, 0, number)
        return array
    }


    for (let i = 1; i < data.length; i++){
        let command = data[i].split(" ")
        let commandName = command[0]
        let n;
        switch(commandName){
            case "Add":
                n = Number (command[1])
                stringInput = addNumber(stringInput, n)
                break
            case "Remove" :
                n = Number (command[1])
                stringInput = removeAllOccurrences(stringInput, n)
                break
            case "RemoveAt":
                n = Number (command[1])
                stringInput = removeAt(stringInput, n)
                break
            case "Insert":
                n = Number (command[1])
                let idx = Number (command[2])
                stringInput = addElement(stringInput, n , idx)
                break
        }
    }
    console.log(stringInput.join(" "))
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)