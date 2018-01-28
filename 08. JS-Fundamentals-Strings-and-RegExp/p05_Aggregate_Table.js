function aggregateTable(arr) {
    let townsArr = arr
        .map(s => s.split('|'))
        .map(e => e.filter(x => x !== ''));

    let townsToPrint = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        [town, income] = townsArr[i];
        townsToPrint.push(town.trim());
        sum += Number(income.trim());
    }
    console.log(townsToPrint.join(', '));
    console.log(sum);
}

aggregateTable([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
    ]);