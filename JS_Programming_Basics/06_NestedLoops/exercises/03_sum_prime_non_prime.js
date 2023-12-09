function SumGivenNumbers(input){
    let sumPrimeNumbers = 0
    let sumNonPrimeNumbers = 0
    let isPrime = true

    let idx = 0
    while (true){
        let command = input[idx]
        if (command === "stop"){
            break
        }
        else{
            let number = Number (input[idx])
            if (number < 0){
                console.log("Number is negative.")
                idx++;
                continue
            }
            for (let i =2; i <= Math.floor(Math.sqrt(number)); i++){
                if (number % i === 0){
                    isPrime = false
                    break
                }
            }
            if (isPrime){
                sumPrimeNumbers += number
            }
            else{
                isPrime = true
                sumNonPrimeNumbers += number
            }
        }
        idx++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`)
}

SumGivenNumbers(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
console.log("------")
SumGivenNumbers(["30",
"83",
"33",
"-1",
"20",
"stop"])
console.log("--------------")
SumGivenNumbers(["0",
"-9",
"0",
"stop"])

