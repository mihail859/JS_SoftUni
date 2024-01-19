function createRegister(data){
    let objRegister = {}

    for (let row of data){
        let [townName, population] = row.split(" <-> ")
        population = Number(population)

        if (!objRegister.hasOwnProperty(townName)){
            objRegister[townName] = 0
        }
        objRegister[townName] += population
    }
    for (let [key, value] of Object.entries(objRegister)){
        console.log(`${key} : ${value}`)
    }
}

createRegister(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

console.log("--//--");

createRegister(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);