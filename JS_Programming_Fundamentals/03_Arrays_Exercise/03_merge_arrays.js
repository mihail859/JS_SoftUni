function mergeArrays(array1, array2){
    let newArray = []

    for (let i = 0; i < array1.length; i++){
        let elementFirstArray =array1[i]
        let elementSecondArray = array2[i]
        let newElement;

        if (i % 2 === 0){
            newElement = Number (elementFirstArray) + Number (elementSecondArray)

        }
        else{
            newElement = elementFirstArray + elementSecondArray
        }
        newArray.push(newElement)
    }
    console.log(newArray.join(" - "))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)