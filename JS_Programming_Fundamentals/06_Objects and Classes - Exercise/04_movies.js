function solveTask(arr){
    let moviesArray = []

    for (let line of arr){
        if (line.includes('addMovie ')){
            let name = line.split("addMovie ")[1]
            moviesArray.push({ name })
        }
        else if (line.includes("directedBy")){
            let [nameMovie, director] = line.split(" directedBy ")

            let movie = moviesArray.find(m => m.name === nameMovie)
            if (movie){
                movie.director = director
            }

        }
        else{
            let [nameMovie, date] = line.split(" onDate ")
            let movie = moviesArray.find(m => m.name === nameMovie)
            if (movie){
                movie.date = date
            }
        }
    }

    moviesArray.forEach(film => {
        if (film.name && film.director && film.date){
            let stringJSON = JSON.stringify(film)
            console.log(stringJSON)
        }
    });
    

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