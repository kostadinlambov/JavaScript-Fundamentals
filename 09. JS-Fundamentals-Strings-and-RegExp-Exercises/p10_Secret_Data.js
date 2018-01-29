function secretData(inputArr) {
    let namesRegex = /(\*)([A-Z][a-zA-Z]*)(?=\s|$|\.)/g;
    let phoneRegex = /(\+)([0-9-]{10})(?=\s|$|\.)/g;
    let idRegex = /(!)([a-zA-Z0-9]+)(?=\s|$|\.)/g;
    let secretBaseRegex = /(_)([a-zA-Z0-9]+)(?=\s|$|\.)/g;

    let resultStr = inputArr.join('\n');
    resultStr = resultStr.replace(namesRegex, replaceFunc);
    resultStr = resultStr.replace(phoneRegex, replaceFunc);
    resultStr = resultStr.replace(idRegex, replaceFunc);
    resultStr = resultStr.replace(secretBaseRegex, replaceFunc);

    console.log(resultStr);

    function replaceFunc(fullMatch, p1) {
        return '|'.repeat(fullMatch.length);
    }
}

secretData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.']);