function logIN(input){
    let password = input[0]
    let tries = 0

    let idx = 1
    for (let i = idx ; i <= input.length; i++){
        tries++;

        let tryPassword = input[idx]
        let reversedPasswordTry = Array.from(tryPassword).reverse().join('');
        if (reversedPasswordTry === password){
            console.log(`User ${password} logged in.`)
            break
        }
        else if(tries === 4){
            console.log(`User ${password} blocked!`)
            break
        }
        else{
            console.log('Incorrect password. Try again.')
        }
        idx++;
    }
}

logIN(['Acer','login','go','let me in','recA'])