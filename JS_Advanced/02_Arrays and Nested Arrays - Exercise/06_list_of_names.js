function sortNames(arr){
    arr.sort((a, b) => a.localeCompare(b))
    arr.forEach((value, idx) => {
        console.log(`${idx+1}.${value}`)
    });
}
sortNames(["John", "Bob", "Christina", "Ema"])