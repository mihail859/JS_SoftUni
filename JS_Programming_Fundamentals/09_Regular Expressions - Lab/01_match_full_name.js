function fullNameSearched(data){
    const pattern = /\b[A-Z]{1}[a-z]{1,}[ ]{1}[A-Z][a-z]{1,}/gm
    let result = data.match(pattern)
    console.log(result.join(" "));
}

fullNameSearched("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")