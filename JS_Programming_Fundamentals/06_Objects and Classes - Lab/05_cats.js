function solveTask(arr){
    class Cat {
        constructor (name, age){
            this.name = name
            this.age = age
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let catsObj = []
    for (let info of arr){
        let [catName, catAge] = info.split(" ")
        let tempCat = new Cat(catName, catAge)
        catsObj.push(tempCat)
        tempCat.meow()
    }
}

solveTask(['Mellow 2', 'Tom 5'])