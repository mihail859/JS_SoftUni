function validatePassword(password){
    const validLength = (pass) => pass.length >= 6 & pass.length <= 10;
    const validSymbols = (pass) => /^[a-zA-Z0-9]+$/.test(pass);
    const validDigits = (pass) => /\d.*\d/.test(pass)

    if (validLength(password) & validDigits(password) & validSymbols(password)){
        console.log("Password is valid")
    }
    if (!validLength(password)){
        console.log("Password must be between 6 and 10 characters")
    }    
    if (!validSymbols(password)){
        console.log("Password must consist only of letters and digits")
    }
    if (!validDigits(password)){
        console.log("Password must have at least 2 digits")
    }
}   

validatePassword('logIn')
console.log("---")
validatePassword('MyPass123')
console.log("---")
validatePassword('Pa$s$s')