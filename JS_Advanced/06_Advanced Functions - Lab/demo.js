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
bindFunction()