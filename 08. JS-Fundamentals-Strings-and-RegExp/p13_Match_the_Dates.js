function extractDates(inputSentences) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;

    let dates = [];
    let match;
    for (let sentence of inputSentences) {
        while (match = regex.exec(sentence)) {
            let fullMatch = match[0];
            let date = match[1];
            let month = match[2];
            let year = match[3];
            dates.push(`${fullMatch} (Day: ${date}, Month: ${month}, Year: ${year})`);
        }
    }
    console.log(dates.join('\n'));
}

extractDates([
    'I am 29-Jul-1955 born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 5-May-1981.']);

extractDates([
    '1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);