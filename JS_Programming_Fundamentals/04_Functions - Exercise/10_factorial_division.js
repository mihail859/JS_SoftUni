function calculateAndPrintDivision(num1, num2) {


    function calculateFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * calculateFactorial(num - 1);
        }
    }

    const factorialNum1 = calculateFactorial(num1);
    const factorialNum2 = calculateFactorial(num2);

    const result = factorialNum1 / factorialNum2;

    console.log(`${result.toFixed(2)}`);
}

calculateAndPrintDivision(5, 2);
