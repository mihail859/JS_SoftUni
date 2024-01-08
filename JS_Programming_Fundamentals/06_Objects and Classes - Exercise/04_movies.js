function solveTask(arr){
    let moviesArray = []

    for (let line of arr){
        if (line.includes('addMovie ')){
            let name = line.split("addMovie ")[1]
            moviesArray.push({ name })
        }
    }
    moviesArray.forEach(el => console.log(el))

}   
solveTask([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )