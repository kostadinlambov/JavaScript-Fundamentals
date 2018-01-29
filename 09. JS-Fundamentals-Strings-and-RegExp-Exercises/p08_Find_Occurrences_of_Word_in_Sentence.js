function countOccurrences(str, word) {
    let regex = new RegExp(`\\b${word}\\b`,'gi');
    let resultArr = str.match(regex);
    if(resultArr !== null){
        console.log(resultArr.length);
    }else{
        console.log(0);
    }
}
countOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');

countOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.' ,'therecxyvc');