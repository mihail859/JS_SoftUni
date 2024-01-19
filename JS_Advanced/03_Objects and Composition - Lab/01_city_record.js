function cityCharacteristics (cityName, population, treasury){
    const objCity = {
        'name': cityName,
        'population': population,
        'treasury': treasury
    }
    return objCity
}   

console.log(cityCharacteristics('Tortuga',
7000,
15000
));

console.log("--//--");
console.log(cityCharacteristics('Santo Domingo',
12000,
23500
))

