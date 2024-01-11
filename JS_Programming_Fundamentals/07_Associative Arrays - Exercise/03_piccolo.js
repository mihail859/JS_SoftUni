function piccolo(data){

    let parkingList = {}

    for (let row of data){
        let [command, carNumber] = row.split(", ")
        //let number = ([...carNumber].slice(2, 6)).map(Number).join("")
        if (command === "IN"){
            parkingList[carNumber] = command
        }else{
            delete parkingList[carNumber]
        }
    }

    if (Object.keys(parkingList).length !== 0){
        let sortedKeys = Object.keys(parkingList).sort((a, b) => a.localeCompare(b))
        for (n of sortedKeys){
            console.log(n)
        }
    }
    else{
        console.log("Parking Lot is Empty")
    }
}


piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
  ]);
  
