function figureOf4Squares(number) {
    let result = '';
    let numberOfLinesWithSpaces = (number - 3) / 2;
    if (number === 2) {
        result += '+' + '-'.repeat(number - 2) + '+' +
            '-'.repeat(number - 2) + '+\n';
    } else {
        result += '+' + '-'.repeat(number - 2) + '+' +
            '-'.repeat(number - 2) + '+\n';
        for (let i = 1; i <= numberOfLinesWithSpaces; i++) {
            result += '|' + ' '.repeat(number - 2) + '|' +
                ' '.repeat(number - 2) + '|\n';
        }
        result += '+' + '-'.repeat(number - 2) + '+' +
            '-'.repeat(number - 2) + '+\n';
        for (let i = 1; i <= numberOfLinesWithSpaces; i++) {
            result += '|' + ' '.repeat(number - 2) + '|' +
                ' '.repeat(number - 2) + '|\n';
        }
        result += '+' + '-'.repeat(number - 2) + '+' +
            '-'.repeat(number - 2) + '+\n';
    }
    console.log(result)
}

figureOf4Squares(2);
figureOf4Squares(3);