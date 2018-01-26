function processNumbers(arr) {
    console.log(arr
        .filter((x, index) => index % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}

processNumbers([10, 15, 20, 25])
processNumbers([3, 0, 10, 4, 7, 3])