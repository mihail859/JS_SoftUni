function rectangle(width, height, color1){
    let color = color1[0].toUpperCase() + color1.substring(1, )
    return {
        width,
        height,
        "color": color,
        calcArea(){
            return this.width * this.height
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
