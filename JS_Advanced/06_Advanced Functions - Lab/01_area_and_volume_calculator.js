function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

const input1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

const input2 = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`;
    
    
function solve(areaFunction, volFunction, inputData) {
    let arrayWithObjects = [];
    let parsedData = JSON.parse(inputData);
    
    parsedData.forEach(obj => {
        let area = areaFunction.call(obj);
        let volume = volFunction.call(obj);

        let current = {
            area: area,
            volume: volume
        }

        arrayWithObjects.push(current)
    });
    return arrayWithObjects
}

console.log(solve(area, vol, input1));
console.log(solve(area, vol, input2));


