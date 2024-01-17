function validDistance(x1, y1, x2, y2){
    //The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
    let firstDistance = Math.sqrt((0-x1)**2 + (0-y1)**2)
    if (Number.isInteger(firstDistance)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    let secondDistance = Math.sqrt((x2 - 0)**2 + (y2-0)**2)
    if (Number.isInteger(secondDistance)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    let thirdDistance = Math.sqrt((x2-x1)**2 + (y2-y1)**2)
    
    if (Number.isInteger(thirdDistance)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validDistance(3, 0, 0, 4)