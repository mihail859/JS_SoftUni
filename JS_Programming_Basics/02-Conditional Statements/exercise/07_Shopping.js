function calculate(input){
    
    let budget  = Number (input[0])
    let videocards = Number (input[1])
    let processors = Number (input[2])
    let ramMemory = Number (input[3])


    let videocardsPrice = 250
    let totalVideoCardsPrice = videocardsPrice * videocards

    let processorsPrice = 0.35 * totalVideoCardsPrice
    let ramMemoryPrice = 0.10 * totalVideoCardsPrice

    let totalProcessorsPrice = processorsPrice * processors
    let totalRamMemoryPrice = ramMemory * ramMemoryPrice

    let totalBill = totalProcessorsPrice + totalRamMemoryPrice + totalVideoCardsPrice
    if (videocards > processors){
        totalBill *= 0.85
    }

    let difference = Math.abs(totalBill - budget)

    if (budget >= totalBill){
        console.log(`You have ${difference.toFixed(2)} leva left`)
    }
    else{
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }

}

calculate(["900",
"2",
"1",
"3"])

calculate(["920.45",
"3",
"1",
"1"])
