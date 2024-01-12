function minorCollection(dataInput){

    let items = {}
    for (let i = 0; i < dataInput.length; i+=2){
        let item = dataInput[i]
        let quantity = Number (dataInput[i+1])

        if (!items.hasOwnProperty(item)){
            items[item] = 0
        }
        items[item] += quantity
    }
    console.log(items)
}

minorCollection([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )