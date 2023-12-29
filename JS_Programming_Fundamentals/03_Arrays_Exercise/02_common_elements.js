function commonElements(array1, array2){
    for (let i = 0; i < array1.length; i++){
        let currentElement = array1[i]
        if (array2.includes(currentElement)){
            console.log(currentElement)
        }
    }   
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)