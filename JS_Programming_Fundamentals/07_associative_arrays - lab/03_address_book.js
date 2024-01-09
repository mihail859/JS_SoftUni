function addressBook(arrayInput){

    let addressList = {}

    for (let row of arrayInput){
        let [name, address] = row.split(":")
        addressList[name] = address
    }
    let keys = Object.keys(addressList)
    keys.sort((a, b) => a.localeCompare(b))
    for (let key of keys){
        console.log(`${key} -> ${addressList[key]}`)
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)