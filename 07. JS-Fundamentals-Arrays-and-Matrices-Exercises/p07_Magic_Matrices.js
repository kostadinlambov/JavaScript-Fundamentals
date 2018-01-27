function magicMatrix(matrixRows = []) {
    let sum = matrixRows[0].reduce((a, b) => a + b);
    for (let row = 0; row < matrixRows.length; row++) {
        let sumRow = matrixRows[row].reduce((a, b) => a + b);
        let sumCol = 0;
        for (let col = 0; col < matrixRows[0].length; col++) {
            sumCol += matrixRows[col][row];
        }
        if (sum !== sumRow || sum !== sumCol) {
            return false;
        }
    }
    return true;
}


console.log(magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));
console.log(magicMatrix([[0], [0], [3]]));