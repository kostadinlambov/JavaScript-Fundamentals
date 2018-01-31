function uniqueArr(dataRows) {
    let uniqueSequences = [];

    for (let dataRow of dataRows) {
        let numArr = JSON.parse(dataRow)
            .map(Number)
            .sort((a, b) => b-a);
        let curSum = numArr.reduce((a, b) => a + b);

        if (!uniqueSequences.find(arr => arr.reduce((a, b) => a + b) === curSum)) {
            uniqueSequences.push(numArr);
        }
    }

    uniqueSequences.sort((a,b) => a.length > b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}

uniqueArr(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);