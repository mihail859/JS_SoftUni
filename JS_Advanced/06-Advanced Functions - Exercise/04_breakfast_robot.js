function solution (){

    const SUCCESS = "Success"

    const ingredientsObj = {
        "apple": {"carbohydrate": 1, "flavour": 2},

        "lemonade" : {"carbohydrate": 10,"flavour": 20},

        "burger" : {"carbohydrate": 5, "fat": 7 ,"flavour": 3},

        "eggs" : {"protein": 5, "fat": 1,"flavour": 1},

        "turkey" : {"protein": 10, "carbohydrate": 10, "fat": 10,  "flavour": 10}
    };

    const microElementsStoredObj = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour": 0,
        returnString(){
            return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`
        }
    };
    
    const operations = {
        restock (microelement, quantity){
            microElementsStoredObj[microelement] += quantity
            return SUCCESS;
        },
    
        prepare(recipe, quantity){
            let current = Object.fromEntries(Object.entries(ingredientsObj[recipe]).map(value => [value[0], value[1]*quantity]))
            for (const key in current) {               
                if (microElementsStoredObj[key] < current[key]){
                    return `Error: not enough ${key} in stock`
                }
            }
            
            for (const key in current) {
                microElementsStoredObj[key] -= current[key]
            }
            return SUCCESS
            
           
            
        },
        report(){
            return microElementsStoredObj.returnString()
        } 
    }

    function manage(cmd){
        const [command, product, quantity] = cmd.split(" ")
        return operations[command](product, Number(quantity))
    }

    return manage

}

// let manager2 = solution()
// console.log(manager2('restock carbohydrate 10')),
// console.log(manager2('restock flavour 10'))
// console.log(manager2('prepare apple 1'))
// console.log(manager2('restock fat 1'))
// console.log(manager2('prepare burger 1'))
// console.log(manager2('report'));

let manager3 = solution()
console.log(manager3);
// console.log(manager3("prepare turkey 1"))
// console.log(manager3("restock protein 10"))
// console.log(manager3("prepare turkey 1"))
// console.log(manager3("restock carbohydrate 10"))
// console.log(manager3("prepare turkey 1"))
// console.log(manager3("restock fat 10"))
// console.log(manager3("prepare turkey 1"))
// console.log(manager3("restock flavour 10"))
// console.log(manager3("prepare turkey 1"))
// console.log(manager3("report"))
