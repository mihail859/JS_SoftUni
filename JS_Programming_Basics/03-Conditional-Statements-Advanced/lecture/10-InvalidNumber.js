function checkIsValid(input){
    let number = Number (input[0])

    let isInRange = false;
    if ((number >= 100 && number <= 200) || number === 0){
        isInRange = true;
    }
    if(!isInRange){
        console.log("invalid")
    }
    
}
checkIsValid(["75"])
checkIsValid(["150"])
checkIsValid(["0"])