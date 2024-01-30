function sayHello(){
    console.log(this.name + ' ' + 'said hello')
}

const obj = {
    name: 'Georgi'
}

sayHello.call(obj)
sayHello.apply(obj)