function demo(){
    let arr = [1, 2, 3, 4]
    let [...copy] = arr
    arr.push(5)
    console.log(arr)
    console.log(copy)
}

demo()