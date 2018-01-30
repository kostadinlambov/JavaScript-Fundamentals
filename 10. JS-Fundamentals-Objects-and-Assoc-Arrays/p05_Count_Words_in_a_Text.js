function countWords(strArr) {
    let words = {};
    let inputStr = strArr.join(' ');

    let wordsArr = inputStr
        .split(/[^\w+]/g)
        .filter(w => w !== '');

    for (let i = 0; i < wordsArr.length; i++) {
        let currentWord = wordsArr[i];
        if(!words.hasOwnProperty(currentWord)){
            words[currentWord] = 0;
        }
        words[currentWord]++;
    }
    console.log(JSON.stringify(words));
}

countWords(['Far too slow, you\'re far too slow.']);