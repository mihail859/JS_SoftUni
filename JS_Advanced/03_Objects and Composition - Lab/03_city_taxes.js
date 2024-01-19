function cityTaxes (cityName, population, treasury){
    const objCity = {
        'name': cityName,
        'population': population,
        'treasury': treasury
    }
    return objCity
} 

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
