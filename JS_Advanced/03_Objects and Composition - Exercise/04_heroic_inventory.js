function createHeroesInventory(arrInput){

    let arrHeroes = []


    for (let row of arrInput){
        let [name, level, arrItems] = row.split(" / ") 
        level = Number (level)
        arrItems = arrItems ? arrItems.split(", ") : []
        let heroObj = {
            'name': name,
            'level': level,
            'items': arrItems
        };

        
        arrHeroes.push(heroObj)
    }


    console.log(JSON.stringify(arrHeroes))
}

createHeroesInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)