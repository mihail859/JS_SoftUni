function validPassword(input){
    let username = input[0]
    let password = input[1]

    let index = 2
    while (input[index] !== password){
        index++;
    }
    console.log(`Welcome ${username}!`)
}   

validPassword(["Nakov",
"1234",
"Pass",
"1324",
"1234"])

validPassword(["Gosho",
"secret",
"secret"])
