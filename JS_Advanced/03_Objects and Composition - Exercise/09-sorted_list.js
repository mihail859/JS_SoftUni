function createSortedList() {
    let obj = {
        numbersList: [],
        size: 0,
        add: function (element) {
            this.numbersList.push(element)
            this.size++;
            this.numbersList.sort((a, b) => a - b)
        },
        remove: function (index) {
            if (this.isValid(index)){
                this.numbersList.splice(index, 1)
                this.size--;
            }
        },
        get: function (index) {
            return this.numbersList[index]
        },
        isValid(idx) {
            if (idx >= 0 && idx < this.numbersList.length){
                return true
            }
            return false
        }

    }

    return obj
};

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.numbersList)
console.log(list.get(1))
list.remove(1);
console.log(list.numbersList)
//console.log(list.get(1));
