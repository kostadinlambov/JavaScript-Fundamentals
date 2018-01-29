function capitalizeWords(str) {
    let arr = str.split(' ');
    let result = [];
    for (let word of arr) {
         let firstChar = word.substring(0, 1).toUpperCase();
         word = firstChar + word.substring(1).toLowerCase();
         result.push(word);
    }
    console.log(result.join(' '));
}

capitalizeWords('Capitalize these words');
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');