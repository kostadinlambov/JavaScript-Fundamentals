function sortArrayBy2Criteria(arr = []) {
    arr = arr.sort((a, b) => {
        if (a.length === b.length) {
            return (a.localeCompare(b)));
        } else if (a.length >= b.length) {
            return 1;
        } else {
            return -1;
        }
    });

    console.log(arr.join('\n'))
}

sortArrayBy2Criteria(['Isacc', 'Theodor','Jack', 'Harrison', 'George']);
sortArrayBy2Criteria(['alpha', 'beta','gamma']);
sortArrayBy2Criteria(['test', 'Deny','omen','Default']);