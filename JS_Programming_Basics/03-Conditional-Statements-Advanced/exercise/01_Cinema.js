function solve(input){
    let typeProjection = input[0]
    let rows = Number (input[1])
    let columns = Number (input[2])

    let viewers = rows * columns
    let totalIncome = 0

    switch (typeProjection){
        case "Premiere":
            totalIncome += viewers * 12.00
            break
        case "Normal":
            totalIncome += viewers * 7.50
            break
        case "Discount":
            totalIncome += viewers * 5.00
            break  
    }
    console.log(`${totalIncome.toFixed(2)}`)  
}
solve(["Premiere",
"10",
"12"])

solve(["Normal",
"21",
"13"])

solve(["Discount",
"12",
"30"])
