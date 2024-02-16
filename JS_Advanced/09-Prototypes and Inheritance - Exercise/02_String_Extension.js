(function updateStringMethods(){
    String.prototype.ensureStart = function(str){
        
        if (!this.toString().startsWith(str)){
            return `${str}${this.toString()}`
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str){
        if (!this.toString().endsWith(str)){
            return `${this.toString()}${str}`
        }
        return this.toString();
    };

    String.prototype.isEmpty = function (){
        return this.toString().length == 0
    };
    String.prototype.truncate = function (){
        
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);

str = str.ensureStart('hello ');
console.log(str);

let newStr = "wer"
console.log(newStr.isEmpty())