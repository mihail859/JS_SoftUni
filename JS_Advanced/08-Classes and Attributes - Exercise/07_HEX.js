class Hex{
    constructor(v){
        this.value = v;
    };
    valueOf(){
        return this.value;
    };
    toString(){
        return `0x${this.value.toString(16).toLocaleUpperCase()}`
    };
    plus(number){
        return new Hex(this.value + number)
    };
    minus(number){
        return new Hex(this.value - number)
    };
    parse(num){
        return parseInt(num, 16);
    }
};




let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
