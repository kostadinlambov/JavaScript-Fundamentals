function evenPosition(arr) {
    return arr.filter((x, index) => index % 2 === 0)
        .join(' ');
}
//(arr) => arr.filter((x, index) => index % 2 === 0).join(' ');

console.log(evenPosition(['20', '30', '40']));