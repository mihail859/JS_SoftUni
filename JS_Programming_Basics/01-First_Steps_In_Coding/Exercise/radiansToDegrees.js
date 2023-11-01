function convert(input){
    let radiansValue = Number (input[0])
    let degreesValue = radiansValue * 180 / Math.PI
    console.log(degreesValue)
}

convert(["6.2832"])