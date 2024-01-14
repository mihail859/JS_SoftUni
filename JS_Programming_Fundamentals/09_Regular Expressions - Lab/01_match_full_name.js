function fullNameSearched(data){
    const pattern = /\b[A-Z]{1}[a-z]{1,}[ ]{1}[A-Z][a-z]{1,}/g
    let resultArr = []
    let result = data.match(pattern)
    let validName;
    //console.log(result.join(" "));
    while ((validName =  pattern.exec(data)) !== null){
        resultArr.push(validName[0])
    }   
    console.log(resultArr)
}

fullNameSearched("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")