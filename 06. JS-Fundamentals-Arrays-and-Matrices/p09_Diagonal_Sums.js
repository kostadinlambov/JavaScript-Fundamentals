function diagonalSums(matrixRows) {
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let row = 0; row < matrixRows.length; row++) {
        let currentRow = matrixRows[row];
        for (let col = 0; col < matrixRows[row].length; col++) {
            if (row === col) {
                sumMainDiagonal += matrixRows[row][col];
            }
            if(col === currentRow.length - 1 - row){
                sumSecondaryDiagonal += matrixRows[row][col];
            }
        }
    }
    let result = [sumMainDiagonal, sumSecondaryDiagonal];
    console.log(result.join(' '));
}

diagonalSums([
    [20, 40],
    [10, 60]]
);

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);