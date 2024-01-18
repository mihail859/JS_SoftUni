function rotateArr(arr, rotationTimes){
    for (let i =1; i <= rotationTimes; i++){
        let lastEl = arr.pop()
        arr.unshift(lastEl)
    }
    console.log(arr.join(" "))
}

rotateArr(['1', 
'2', 
'3', 
'4'], 
2
);

console.log("--//--")

rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);