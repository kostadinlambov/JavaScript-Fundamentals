function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current;
        seq [current] = seq
            .slice(start, end)
            .reduce((a, b) => a + b);
    }
    console.log(seq);
}

sumLastKNumbersSequence(6, 3);
