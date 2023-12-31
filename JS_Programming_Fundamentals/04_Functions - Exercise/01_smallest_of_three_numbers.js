function printSmallestNumber(num1, num2, num3){
    let smallest;
    if (num1 < num2 & num1 < num3){
        smallest = num1
    }
    else if (num2 < num1 & num2 < num3){
        smallest = num2
    }
    else {
        smallest = num3
    }
    console.log(smallest)
}

printSmallestNumber(2,
    5,
    3
    )