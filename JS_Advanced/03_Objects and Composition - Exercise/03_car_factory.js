function carFactory(requirementsObj){
    const car ={
        'model': requirementsObj.model
    };

    const enginesObj = {
        "Small engine": { "power": 90, volume: 1800 },
        "Normal engine": { "power": 120, volume: 2400 },
        "Monster engine": { "power": 200, volume: 3500 }
    }
    if (requirementsObj.power <= 90){
        car['engine'] = enginesObj["Small engine"]
    }else if (requirementsObj.power <= 120){
        car['engine'] = enginesObj["Normal engine"]
    }else{
        car['engine'] = enginesObj["Monster engine"]
    }

    car['carriage'] = {
        'type': requirementsObj.carriage,
        'color': requirementsObj.color
    }
    if (requirementsObj.wheelsize % 2 === 0){
        requirementsObj.wheelsize--;
    }
    let arr = new Array(4)
    arr.fill(requirementsObj.wheelsize, 0, 4)
    car['wheels'] = arr

    return car

}



console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

))