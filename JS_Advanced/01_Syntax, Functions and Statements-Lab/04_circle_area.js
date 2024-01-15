function circleArea(r){
    if (typeof r !== "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof r}.`)
    }else{
        let area = Math.PI * r*r
        console.log(`${area.toFixed(2)}`)
    }
}

circleArea(5)
console.log("--//--")
circleArea('name')