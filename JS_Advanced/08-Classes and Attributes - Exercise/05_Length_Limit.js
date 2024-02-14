class Stringer{
    constructor(string, initialLength){
        this.innerString  = string;
        this.innerLength = initialLength;
    }
    increase(len){
        this.innerLength += len;
    };
    decrease(len){
        const res = this.innerLength - len;
        this.innerLength = res < 0 ? 0 : res;
    };
    toString(){
        const DOTS = "...";
        if (this.innerLength === 0){
            return DOTS;
        }
        if (this.innerString .length > this.innerLength){
            return `${this.innerString .slice(
                0,
                 this.innerLength
                )}${DOTS}`;
        }
        return this.innerString ;
        
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

test.decrease(4);
console.log(test.toString()); // Test