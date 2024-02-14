const { log } = require("console");

function storeCars(arr) {
    let carsObj = {};

    for (let row of arr) {
        let [carBrand, carModel, producedCars] = row.split(' | ');
        producedCars = Number(producedCars);

        if (!carsObj.hasOwnProperty(carBrand)) {
            carsObj[carBrand] = {};
        }

        if (!carsObj[carBrand].hasOwnProperty(carModel)) {
            carsObj[carBrand][carModel] = 0;
        }

        carsObj[carBrand][carModel] += producedCars;
    }

    for (let [car, models] of Object.entries(carsObj)){
        console.log(car);
        for (let [m, q] of Object.entries(models)){
            console.log(`###${m} -> ${q}`);
        }
    }
}

storeCars(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);
