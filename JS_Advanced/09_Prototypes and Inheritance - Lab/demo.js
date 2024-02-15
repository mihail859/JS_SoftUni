function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function(){
    console.log(`${this.name} says hi!`);
}
Person.prototype.country = "Bulgaria"

const obj = new Person('Peter', 27)
console.log(obj);
obj.sayHello();
console.log(obj.country);

obj.country = "Spain";
console.log(obj);