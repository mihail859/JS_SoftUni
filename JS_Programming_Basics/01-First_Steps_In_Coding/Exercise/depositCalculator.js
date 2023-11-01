function depositCalculate(input){
    let depositTerm = Number (input[1])
    let  depositSum = Number (input[0])
    let annualInterest = Number (input[2])

    let accruedInterest = depositSum * (annualInterest / 100)
    let monthInterest = accruedInterest / 12
    let totalSum = depositSum + depositTerm * monthInterest
    console.log(totalSum)
}
depositCalculate(
    ["2350",
"6 ",
"7 "]

)