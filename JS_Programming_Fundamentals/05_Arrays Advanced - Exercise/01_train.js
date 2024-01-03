function train(arrayInput){
    let wagons = arrayInput[0].split(" ").map(Number)
    let maxCapacityPerWagon = Number (arrayInput[1])
    let people;

    for (let i = 2; i < arrayInput.length; i++){

        let currentData = arrayInput[i].split(" ")
        if (currentData.length === 1){
            people = Number (currentData[0])
            for (let i = 0; i < wagons.length; i++){
                if (wagons[i] + people <= maxCapacityPerWagon){
                    wagons[i] += people
                    break;
                }
            }

        }
        else{
            people = Number (currentData[1])
            wagons.push(people)
        }
    }
    console.log(wagons.join(" "))

    
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)