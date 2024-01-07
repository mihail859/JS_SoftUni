function printInformation(arr){
    let arrInfo = []
    for (let row of arr){
        let [town, lat, long] = row.split(" | ")
        let currObj = {
            town: town,
            latitude: Number(lat).toFixed(2),
            longitude: Number(long).toFixed(2)
        }
        arrInfo.push(currObj)
    }
    for (let info of arrInfo){
        console.log(info)
    }
}

printInformation(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)