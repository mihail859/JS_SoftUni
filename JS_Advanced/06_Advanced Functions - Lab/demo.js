function sayHello(grade){
    console.log(this.name + ' ' + 'said hello');
    console.log(this.age  + '`s ' + 'old student had a ' + grade)
}

const obj = {
    name: 'Georgi',
    age: 21
}

sayHello.call(obj, 8)
sayHello.apply(obj, [5]);

let bindFunction = sayHello.bind(obj, 8);
bindFunction();

console.log(Math.max.apply(null, [1, 2,3, 4, 5, 6, 7, 8, 9]))