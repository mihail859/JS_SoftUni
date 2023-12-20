function  echo(data){
    if (typeof(data) === "number" || typeof(data) === "string"){
        console.log(typeof(data))
        console.log(data)
    }
    else{
        console.log(typeof(data))
        console.log('Parameter is not suitable for printing')
    }
}
echo('Hello, JavaScript!')
console.log("---")
echo(18)
console.log("---")
echo(null)