function orbit(arr) {

    let dim2 = arr[0];
    let dim1 = arr[1];
    let x = arr[2];
    let y = arr[3];

    let matrix = new Array(dim2);
    for (let row = 0; row < dim2; row++) {
        matrix[row] = new Array(dim1).fill(0);
    }
    matrix[x][y] = 1;
    let numberToFill = 2;

    while (x + numberToFill - 1 < dim2 || y + numberToFill - 1 < dim1 ||
    x - numberToFill + 1 >= 0 || y - numberToFill + 1 >= 0) {
        if (y + numberToFill - 1 < dim2) {
            fillCurrentCol(x, y, numberToFill, '+');
        }
        if (x + numberToFill - 1 < dim1) {
            fillCurrentRow(x, y, numberToFill, '-');
        }
        if (y - numberToFill + 1 >= 0) {
            fillCurrentCol(x, y, numberToFill, '-');
        }
        if (x - numberToFill + 1 >= 0) {
            fillCurrentRow(x, y, numberToFill, '+');
        }
        numberToFill++;
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }

    function fillCurrentCol(currentRow, currentCol, numberToFill, operand) {
        let startIndexRow = Math.max(0, currentRow - numberToFill + 1);
        let endIndexRow = Math.min(dim1 - 1, currentRow + numberToFill - 1);
        fillMatrix(startIndexRow, endIndexRow);

        function fillMatrix(startIndexRow, endIndexRow) {
            for (let i = startIndexRow; i <= endIndexRow; i++) {

                if (operand === '-') {
                    matrix[i][currentCol - numberToFill + 1] = numberToFill;
                } else {
                    matrix[i][currentCol + numberToFill - 1] = numberToFill;
                }
            }
        }
    }

    function fillCurrentRow(currentRow, currentCol, numberToFill, operand) {
        let startIndexCol = Math.max(0, currentCol - numberToFill + 1);
        let endIndexCol = Math.min(dim2 - 1, currentCol + numberToFill - 1);
        fillmatrix(startIndexCol, endIndexCol);

        function fillmatrix(startIndexCol, endIndexCol) {
            for (let i = startIndexCol; i <= endIndexCol; i++) {
                if (operand === '+') {
                    matrix[currentRow - numberToFill + 1][i] = numberToFill;
                } else {
                    matrix[currentRow + numberToFill - 1][i] = numberToFill;
                }
            }
        }
    }
}

//orbit([5, 5, 2, 2]);
//orbit([4, 4, 0, 0]);
//orbit([4, 4, 0, 3]);
// orbit([3, 3, 2, 2]);
//orbit([5, 5, 3, 1]);
orbit([15, 15, 6, 7]);