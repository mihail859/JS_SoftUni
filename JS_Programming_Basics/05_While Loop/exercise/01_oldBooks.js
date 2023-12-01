function calculateSearch(input){
    let searchedBook = input[0]

    let searchedBooksCount = 0
    let isFound = false
    for (let idx = 1; idx <= input.length; idx++){
        let currentBook = input[idx]
        if (currentBook === "No More Books"){
            break
        }


        if (currentBook === searchedBook){
            console.log(`You checked ${searchedBooksCount} books and found it.`)
            isFound = true
            break
        }
        searchedBooksCount++;
    }
    if (!isFound){
        console.log("The book you search is not here!")
        console.log(`You checked ${searchedBooksCount} books.`)
    }

}

calculateSearch(["Troy",
"Stronger",
"Life Style",
"Troy"])

calculateSearch(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

calculateSearch(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

