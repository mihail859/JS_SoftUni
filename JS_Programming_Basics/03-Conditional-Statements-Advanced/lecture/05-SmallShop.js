function calculate(input){
    let product  = input[0]
    let town = input[1]
    let quantity = Number (input[2])

    let ascArray = {
        "coffee": 0.0,
        "water": 0.0,
        "beer": 0.0,	
        "sweets": 0.0,	
        "peanuts": 0.0
    }


    if (town === "Sofia"){

        /*0.50	0.80	1.20	1.45	1.60*/
        ascArray.coffee = 0.50
        ascArray.water = 0.80
        ascArray.beer = 1.20
        ascArray.sweets = 1.45
        ascArray.peanuts = 1.60
    }

    else if(town === "Plovdiv"){
        /*0.40	0.70	1.15	1.30	1.50*/
        ascArray.coffee = 0.40
        ascArray.water = 0.70
        ascArray.beer = 1.15
        ascArray.sweets = 1.30
        ascArray.peanuts = 1.50
    }
    else{
        /*0.45	0.70	1.10	1.35	1.55*/
        ascArray.coffee = 0.45
        ascArray.water = 0.70
        ascArray.beer = 1.10
        ascArray.sweets = 1.35
        ascArray.peanuts = 1.55
    }

    let totalSum = quantity * ascArray[product]
    console.log(totalSum)
}

calculate(["coffee",
"Varna",
"2"])

calculate(["peanuts",
"Plovdiv",
"1"])

calculate(["beer",
"Sofia",
"6"])

calculate(["water",
"Plovdiv",
"3"])

calculate(["sweets",
"Sofia",
"2.23"])
