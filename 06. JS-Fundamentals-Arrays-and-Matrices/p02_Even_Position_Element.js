function evenPosition(arr) {
    return arr.map(Number).filter((x, index) => index % 2 === 0)
        .join(' ');
}
//(arr) => arr.map(Number).filter((x, index) => index % 2 === 0).join(' ');

console.log(evenPosition(['20', '30', '40']));