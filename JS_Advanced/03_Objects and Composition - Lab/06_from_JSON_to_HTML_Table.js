function fromJSONToHTMLTable(jsonArray) {
    let json = jsonArray[0]; // Access the first element of the array (which is the JSON string)
    let parsed = JSON.parse(json);
    let columns = Object.keys(parsed[0]);
    let result = '<table>\n';

    result += `<tr>`;

    for (let columnName of columns) {
        result += `<th>${columnName}</th>\n`;
    }

    result += `</tr>`;

    for (let obj of parsed) {
        result += `<tr>`;
        for (let column of columns) {
            result += `<td>${obj[column]}</td>`;
        }
        result += `</tr>\n`;
    }

    result += `</table>`;
    console.log(result);
}

fromJSONToHTMLTable([
    `[{"Name":"Pesho", "Score":4, "Grade":8},
       {"Name":"Gosho", "Score":5, "Grade":8},
       {"Name":"Angel", "Score":5.50, "Grade":10}]`
]);
