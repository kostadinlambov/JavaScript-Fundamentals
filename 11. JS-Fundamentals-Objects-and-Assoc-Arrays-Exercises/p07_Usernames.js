function userNames(strArr) {
    let userNamesSet = new Set();

    for(let name of strArr){
        userNamesSet.add(name)
    }

    function sortFunc(a, b) {
        if((a.length - b.length) === 0){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }

    let sortedSet = [...userNamesSet].sort(sortFunc);
    console.log(sortedSet.join('\n'));
}

userNames([
    'Ashton',
    'Kutcher',
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);