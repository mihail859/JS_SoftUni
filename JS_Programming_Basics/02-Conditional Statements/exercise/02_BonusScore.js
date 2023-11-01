function bonusPoints(input) {
    let number = Number(input[0]); // Parse the input to a number
    let bonusPoints = 0.0;

    if (number % 2 === 0) {
        bonusPoints += 1;
    }
    if (number % 10 === 5) {
        bonusPoints += 2;
    }
    if (number <= 100) {
        bonusPoints += 5;
    } else if (number <= 1000) {
        bonusPoints += number * 0.2;
    } else {
        bonusPoints += number * 0.1;
    }

    console.log(bonusPoints);
    let totalPoints = bonusPoints + number;
    console.log( totalPoints);
}

bonusPoints(["20"]);
bonusPoints(["175"]);
bonusPoints(["2703"]);
