function calculate(input){

    let protectiveNylonPricePerSqrMeter = 1.50
    let paintPricePerLitre = 14.50
    let thinnerPricePerLitre = 5.00

    let protectiveNylon = Number (input[0])
    let paint = Number (input[1])
    let thinner = Number (input[2])
    let hoursWorking = Number (input[3])
    let bagPrice = 0.40

    paint *= 1.10
    protectiveNylon += 2

    let totalProtectiveNylonPrice = protectiveNylon * protectiveNylonPricePerSqrMeter
    let totalPaintPrice = paint * paintPricePerLitre
    let totalThinnerPrice = thinner * thinnerPricePerLitre

    let totalPriceForMaterials = totalProtectiveNylonPrice + totalPaintPrice + totalThinnerPrice + bagPrice
    let pricePerHourForWorkers = 0.30 * totalPriceForMaterials * hoursWorking

    let finalSum = totalPriceForMaterials + pricePerHourForWorkers

    console.log(finalSum)
}
calculate
(
    ["5 ",
    "10 ",
    "10 ",
    "1 "]
    
)