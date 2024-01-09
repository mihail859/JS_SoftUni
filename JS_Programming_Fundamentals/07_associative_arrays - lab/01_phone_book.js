function createPhoneBook(dataInput){

    let phoneBook = {}

    for (let row of dataInput){
        let [name, phoneNumber] = row.split(" ")
        phoneBook[name] = phoneNumber
    }

    for (let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}

createPhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)