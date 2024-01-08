function registerForHeroes(inputData){
    let heroesArr = []

    for (let row of inputData){
        let [name, level, items] = row.split(" / ")
        let heroObj = {
            name: name,
            level: level,
            items: items
        }
        heroesArr.push(heroObj)
    }

    heroesArr.sort((a, b) => a.level - b.level)
    heroesArr.forEach(element => {
        console.log(`Hero: ${element.name}\nlevel => ${element.level}\nitems => ${element.items}`)
    });
}

registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )