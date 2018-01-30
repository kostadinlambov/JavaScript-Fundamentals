function countWords(strArr) {
    let words = new Map();
    let text = strArr.join('\n').toLowerCase();
    let regex = /\W+/g;
    let wordsArr = text
        .split(regex)
        .filter(x => x !== '');

    for (let word of wordsArr) {
        if (!words.has(word)) {
            words.set(word, 0);
        }
        words.set(word, words.get(word) + 1);
    }

    [...words].sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([word, count]) => {
            console.log(`'${word}' -> ${count} times`);
        });
}

countWords(['Far too slow, you\'re far too slow.']);
countWords(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);