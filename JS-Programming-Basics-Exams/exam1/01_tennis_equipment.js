function calculate(input){
    let tennisRacketPrice = Number (input[0])
    let numberOfTennisRacket = Number (input[1])
    let numberOfShoesPairs = Number (input[2])

    let pairShoesPrice = 1 / 6 * tennisRacketPrice

    let totalTennisRacketSum = tennisRacketPrice * numberOfTennisRacket
    let totalShoesSum = numberOfShoesPairs * pairShoesPrice


    let totalPrice = totalShoesSum + totalTennisRacketSum
    let equipmentPrice = totalPrice * 0.20
    totalPrice += equipmentPrice

    let pricePaidByHim = totalPrice * 1/8
    let leftPrice = totalPrice * 7/8

    console.log(`Price to be paid by Djokovic ${Math.floor(pricePaidByHim)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(leftPrice)}`)

}


calculate(
    ["850",
    "4",
    "2"]
)