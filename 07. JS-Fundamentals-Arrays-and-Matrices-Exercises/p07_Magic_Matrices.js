function magixMatrices(matrixRows = []) {
    let sum = matrixRows[0].reduce((a, b) => a + b);
    for (let row = 0; row < matrixRows[0].length; row++) {
        let sumRows = matrixRows[row].reduce((a, b) => a + b);
        let sumCols = 0;
        for (let col = 0; col < matrixRows.length; col++) {
            sumCols += matrixRows[col][row];
        }
        if(sum !== sumRows || sum!== sumCols){
            return false
        }
    }
    return true;
}

console.log(magixMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magixMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magixMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));
console.log(magixMatrices([[0], [0], [3]]));