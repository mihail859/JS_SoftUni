function piccolo(data){

    let parkingList = {}

    for (let row of data){
        let [command, carNumber] = row.split(", ")
        let number = ([...carNumber].slice(2, 6)).map(Number).join("")
        if (command === "IN"){
            parkingList[number] = carNumber
        }else{
            delete parkingList[number]
        }
    }

    if (parkingList){
        let sortedKeys = Object.keys(parkingList).sort((a, b) => a-b)
        for (n of sortedKeys){
            console.log(parkingList[n])
        }
    }
    else{
        console.log("Parking Lot is Empty")
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

piccolo['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
