function piccolo(data){

    let parkingList = {}

    for (let row of data){
        let [command, carNumber] = row.split(", ")
        console.log(command)
        console.log(carNumber)
        let number = ([...carNumber].slice(2, 6)).map(Number).join("")
        console.log(number)
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