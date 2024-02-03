function add(acc){

    function calc(num){
        acc+=num
        return calc
    }

    calc.toString = function (){
        return acc.toString()
    }

    return calc


}

console.log(add(1)(2)(3).toString())