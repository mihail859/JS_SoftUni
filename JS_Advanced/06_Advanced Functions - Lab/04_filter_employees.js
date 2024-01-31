function solve(data, criteria){
    let parsedData = JSON.parse(data);

    let [keyName, keyValue] = criteria.split("-")

    // console.log(keyName)
    // console.log(keyValue)

    let filtered = parsedData
    .filter(currObj => currObj[keyName] === keyValue)
    .map((obj, i) => `${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`)
    
    filtered.forEach(element => {
        console.log(element)
    });


}




const input1 = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`;


  solve(input1, 'gender-Female')