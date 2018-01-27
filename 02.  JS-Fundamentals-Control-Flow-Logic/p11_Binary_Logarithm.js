function log(array) {
    for (let index in array) {
        console.log(Math.log2(array[index]))
    }
}
log([1, 2, 3, 4, 5]);