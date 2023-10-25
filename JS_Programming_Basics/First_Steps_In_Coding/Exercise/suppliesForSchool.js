function calculate(input){

    let penPricePackage = 5.80
    let markerPricePackage = 7.20
    let whiteboardCleanerPricePerLitre = 1.20

    let penPackages = Number (input[0])
    let markersPackages = Number (input[1])
    let litresWhiteboardCleaner = Number (input[2])
    let percentDisscount = Number (input[3])


    let totalPenPrice = penPackages * penPricePackage
    let totalMarkersPrice = markerPricePackage * markersPackages
    let totalWhiteBoardCleaner = whiteboardCleanerPricePerLitre * litresWhiteboardCleaner

    let totalPrice = totalPenPrice + totalMarkersPrice + totalWhiteBoardCleaner
    totalPrice *= (1-(percentDisscount / 100)) 

    console.log(totalPrice)
}

calculate
(
    ["4 ",
    "2 ",
    "5 ",
    "13 "]
)