class Person{
    constructor(firstName,lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

const person1 = new Person('Paolena', 'Ruseve', 18, 'paolena_ruseve@gmail.com')
console.log(person1.toString())