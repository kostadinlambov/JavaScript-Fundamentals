function squareOfStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log('* '.repeat(n).trim())
    }
}

squareOfStars(4)