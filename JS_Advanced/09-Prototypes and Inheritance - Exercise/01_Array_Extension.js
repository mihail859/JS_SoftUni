(function modifyArr(){
    Array.prototype.last = function(){
        return this[this.length - 1]
    }
    Array.prototype.skip = function(n){
        const arrElements = []
        for(let i = n; i < this.length; i++){
            arrElements.push(this[i])
        }
        return arrElements;
    }
    Array.prototype.take = function(n){
        const arrElements = []
        for(let i = 0; i < n; i++){
            arrElements.push(this[i])
        }   
        return arrElements;
    }
    Array.prototype.sum = function(){
        return this.reduce((sum, el) => sum + el, 0)
    }
    Array.prototype.average = function(){
        return this.reduce((sum, el) => sum + el, 0) / this.length
    }
})();

const myArr = [1, 2, 3, 4, 5, 6]
console.log(myArr.last())
console.log(myArr.skip(2))
console.log(myArr.take(1))
console.log(myArr.sum())
console.log(myArr.average())