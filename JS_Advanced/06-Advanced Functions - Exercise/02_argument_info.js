function giveArgumentsDataTypeInfo(...args){
    const dataTypesObj = {}

    args.forEach(element => {
        let typeElement = typeof element

        console.log(`${typeElement}: ${element}`)
        if (!dataTypesObj.hasOwnProperty(typeElement)){
            dataTypesObj[typeElement] = {
                'appearances':0,
                'items': []
            }
        }
        dataTypesObj[typeElement]['appearances']++;
        dataTypesObj[typeElement]['items'].push(element)

    });

    let dataTypesObjSorted = Object.fromEntries(Object.entries(dataTypesObj).sort((a,b) => b[1]['appearances'] - a[1]['appearances']));
    
    
    for (let key2 in dataTypesObjSorted){
        let appearancesCount = dataTypesObjSorted[key2]['appearances'];
        console.log(`${key2} = ${appearancesCount}`)
    }

}

giveArgumentsDataTypeInfo({ name: 'bob'}, 3.333, 9.999)