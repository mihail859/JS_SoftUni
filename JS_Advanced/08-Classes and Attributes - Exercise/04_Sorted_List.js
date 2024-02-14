class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    sortList() {
        return this.list.sort((a, b) => a - b)
    }
    increaseSize(){
        this.size++;
    }

    add(element) {
        this.list.push(element);
        this.sortList();
        this.increaseSize();
    };
    remove(index) {
        if (this.list[index] === undefined){
            return;
        }
        this.list.splice(index, 1);
        this.size--;
    };
    get(index) {
        if (this.list[index] === undefined){
            return;
        }
        return this.list[index]
    };

}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
