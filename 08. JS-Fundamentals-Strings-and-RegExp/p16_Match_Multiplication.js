function performMultiplications(str) {
    let regex = /((-)?\d+)\s*\*\s*((-)?\d+(\.\d+)*)/g;

    let match;
    while (match = regex.exec(str)){
        str = str.replace(regex, replacementFunc)
    }
    console.log(str);
    function replacementFunc(match, p1, p2, p3) {
        return Number(p1) * Number(p3);
    }
}
performMultiplications('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');