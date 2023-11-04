function calculate(input){
    let town = input[0]
    let price = Number (input[1])
    let commission = price

    let townsArray = ["Sofia", "Varna", "Plovdiv"]
    if (!townsArray.includes(town) || price < 0){
        console.log("error")
    }
    else{
        if (town === townsArray[0]){
            if(price <= 500){
                commission *= 0.05
            }
            else if (price <= 1000){
                commission *= 0.07
            }
            else if (price <= 10000){
                commission *= 0.08
            }
            else{
                commission *= 0.12
            }
        }
        else if(town === townsArray[1]){
            if(price <= 500){
                commission *= 0.045
            }
            else if (price <= 1000){
                commission *= 0.075
            }
            else if (price <= 10000){
                commission *= 0.1
            }
            else{
                commission *= 0.13
            }
        }
        else if(town === townsArray[2]){
            if(price <= 500){
                commission *= 0.055
            }
            else if (price <= 1000){
                commission *= 0.08
            }
            else if (price <= 10000){
                commission *= 0.12
            }
            else{
                commission *= 0.145
            }
        }
        console.log(`${commission.toFixed(2)}`)
    }

}

calculate(["Sofia",
"1500"])

calculate(["Plovdiv",
"499.99"])

calculate(["Varna",
"3874.50"])

calculate(["Kaspichan",
"-50"])
