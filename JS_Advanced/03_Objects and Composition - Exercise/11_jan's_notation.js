function calculate(arr){

    let operatorsObj = {
        '+': (a, b) => a + b,
        '-': (a, b) => b- a,
        '*': (a, b) => a * b,
        '/': (a, b) => b/a
    }

    let clonedArr = arr.slice(0)
    let numbers = [];

    for (let i = 0; i<= arr.length; i++){
        if (i === arr.length){
            if (numbers.length === 1){
                console.log(numbers[0]);
                break
            }else{
                console.log("Error: too many operands!")
                break
            }
        }
        if (typeof clonedArr[i] === 'number'){
            numbers.push(clonedArr[i])
        }  else {
            const operand = clonedArr[i]
            if(numbers.length < 2){
                console.log("Error: not enough operands!")
                break
            } else {

                let numA = numbers.pop()
                let numB = numbers.pop()

                const res = operatorsObj[operand](numA, numB)
                numbers.push(res)
            }
        }
    }
    
};

calculate([3,
    4,
    '+']
   )

   calculate([5,
    3,
    4,
    '*',
    '-']
   )