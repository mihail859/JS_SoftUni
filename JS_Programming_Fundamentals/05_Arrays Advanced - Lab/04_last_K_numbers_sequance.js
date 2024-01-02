function generateSequence(n, k) {
    let sequence = [1]

    for (let i = 1; i < n; i++){
        let number = sequence.slice(-k).reduce((sum, num) => sum + num, 0)
        sequence.push(number)
    }
    console.log(sequence.join(" "))
}

// Example usage:
generateSequence(6, 3);
