function solution (n){
    
    return function (x){
        return n + x
    }
}




let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
