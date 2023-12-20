function solve(string_old, char, string){
    let result = string_old.replace('_', char)
    let output =  result === string ? "Matched" : "Not matched"
    console.log(output)
}

solve('Str_ng', 'I', 'Strong')
console.log("--------------------")
solve('Str_ng', 'i', 'String')