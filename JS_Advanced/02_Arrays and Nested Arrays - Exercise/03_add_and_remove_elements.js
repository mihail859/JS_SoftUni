function addAndRemove(commands){
    let initialNumber = 1
    let result = []
    for (let i = 0; i < commands.length; i++){
        let currentCommand = commands[i]
        switch (currentCommand) {
            case 'add':
                 result.push(initialNumber)
                 initialNumber +=1
                break;
        
            default:
                result.pop()
                initialNumber++;
                break;
        }
    }
    return result.length >= 1 ? result.join("\n") : 'Empty'
}

console.log(addAndRemove(['add', 
'add', 
'add', 
'add']
));

console.log("--//--")
console.log(addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
))
console.log("--//--")


console.log(addAndRemove(['remove', 
'remove', 
'remove']
))