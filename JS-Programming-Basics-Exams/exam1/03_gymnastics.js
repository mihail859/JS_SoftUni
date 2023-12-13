function printScore(input){
    let country = input[0]
    let appliance = input[1]

    let difficultScore = 0
    let performanceScore = 0

    switch (country){
        case "Russia":
            if (appliance === "ribbon"){
                difficultScore = 9.100
                performanceScore = 9.400
            }
            else if (appliance === "hoop"){
                difficultScore = 9.300
                performanceScore = 9.800
            }
            else if (appliance === "rope"){
                difficultScore = 9.600
                performanceScore = 9.000
            }
            break;
        case "Bulgaria":
            if (appliance === "ribbon"){
                difficultScore = 9.600
                performanceScore = 9.400
            }
            else if (appliance === "hoop"){
                difficultScore = 9.550
                performanceScore = 9.750
            }
            else if (appliance === "rope"){
                difficultScore = 9.500
                performanceScore = 9.400
            }
            break;
        case "Italy":
            if (appliance === "ribbon"){
                difficultScore = 9.200
                performanceScore = 9.500
            }
            else if (appliance === "hoop"){
                difficultScore = 9.450
                performanceScore = 9.350
            }
            else if (appliance === "rope"){
                difficultScore = 9.700
                performanceScore = 9.150
            }
            break;
    }

}