function convertTownsObjectToJSON(input) {
    let result = [];
    input.shift();
    input.forEach(el => {
        let [town, latitude, longitude] = el.split('|').map(a => a.trim()).filter(Boolean);
        result.push({'Town': town, 'Latitude': parseFloat(Number(latitude).toFixed(2)), 'Longitude': parseFloat(Number(longitude).toFixed(2))});
    });
    return JSON.stringify(result);  
}
  
console.log(convertTownsObjectToJSON(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |', '| Monatevideo | 34.50 | 56.11 |']));
  