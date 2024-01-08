function combineAndPrintTerms(arr) {
    // Combine JSON strings into one object
    let combinedDictionary = {};
    for (let jsonString of arr) {
        let obj = JSON.parse(jsonString);
        Object.keys(obj).forEach(term => {
            combinedDictionary[term] = obj[term];
        });
    }

    // Sort terms alphabetically
    let sortedTerms = Object.keys(combinedDictionary).sort((a, b) => a.localeCompare(b));

    // Print terms and definitions
    sortedTerms.forEach(term => {
        let definition = combinedDictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    });
}
combineAndPrintTerms([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )