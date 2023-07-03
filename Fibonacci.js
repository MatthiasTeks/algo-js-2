function fibonacci(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }

    let fibNumbers = [0, 1];
    while (fibNumbers.length < n) {
        let nextNum = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
        fibNumbers.push(nextNum);
    }

    return fibNumbers;
}

console.assert(JSON.stringify(fibonacci(5)) === JSON.stringify([0, 1, 1, 2, 3]), "Test 1 Failed");
