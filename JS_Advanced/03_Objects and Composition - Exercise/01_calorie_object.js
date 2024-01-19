function composeObject (arr) {
    let productsObj = {}

    for (let i = 0; i < arr.length; i+=2){
        let product = arr[i]
        let quantity = Number ( arr[i+1] )

        productsObj[product] = quantity
    }

    console.log(productsObj)
}

composeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])