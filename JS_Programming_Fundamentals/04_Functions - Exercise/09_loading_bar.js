function loadingBarDraw(n){

    function drawBar (z){
        let string = "%".repeat(z/10) + ".".repeat((100-z) / 10)
        return string
    }


    if (n === 100){
        console.log("100% Complete!")
        console.log(`[${drawBar(n)}]`)
    }
    else {
        console.log(`${n}% [${drawBar(n)}]`)
        console.log("Still loading...")
    }
}

loadingBarDraw(30)
loadingBarDraw(50)
loadingBarDraw(100)