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
    String.prototype.truncate = function (n){
        let strValue = this.toString();
        const ELLIPSIS = "..."
        const SINGLE_DOT = "."

        if (strValue.length <= n){
            return strValue;
        };
        if (n < 4){
            return SINGLE_DOT.repeat(n)
        };
        const truncValue = strValue.substr(0, n - 2);
        const lastIndex = truncValue.lastIndexOf(" ");

    if (lastIndex !== -1) {
      return `${strValue.substr(0, lastIndex)}${ELLIPSIS}`;
    }

    return `${strValue.substr(0, n - 3)}${ELLIPSIS}`;

    }

    String.format = function(string, ...params){
        let str = string;
        for (let i=0; i < params.length; i++){
            let idx = str.indexOf(`{${i}}`)
            while (idx !== -1){
                str = str.replace(`{${i}}`, params[i])
                idx = str.indexOf(`{${i}}`)
            }
        }   
        return str;
    }
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);

str = str.ensureStart("hello ");
console.log(str);

str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

str = str.truncate(2);
console.log(str);

str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);

str = String.format("jumps {0} {1}", "dog");
console.log(str);