function applyFunctions(number, ...command){
    const objectWithFunctions = {
        'chop': num => num / 2,
        'dice': num => Math.sqrt(num),
        'spice': num => num + 1,
        'bake': num => num * 3,
        'fillet':num => num * 0.80
    }

    command.forEach(element => {
        number = objectWithFunctions[element](number)
        console.log(number)
    })
    

}
applyFunctions('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log("--//--")
applyFunctions('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

/*•	chop - divide the number by two
•	dice - square root of a number
•	spice - add 1 to the number
•	bake - multiply number by 3
•	fillet - subtract 20% from the number
*/