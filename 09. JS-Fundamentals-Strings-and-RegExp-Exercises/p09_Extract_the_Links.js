function extractLinks(inputArr) {
    let regex = /www\.([a-zA-Z0-9-]+)\.([a-z]+)(\.[a-z]+)*/;

    for (let sentence of inputArr) {
        let match = sentence.match(regex);
        if (match !== null) {
            console.log(match[0]);
        }
    }
}
extractLinks(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']);