function spiralMatrix(dim1, dim2) {
    let numberToFill = 1;
    let spiralMatrix = new Array(dim1);
    for (let i = 0; i < dim1; i++) {
        spiralMatrix[i] = new Array(dim2).fill(0);
    }

    spiralMatrix[0][0] = numberToFill;

    currentRow = 0;
    currentCol = 0;
    while (true) {
        if (currentCol + 1 < dim2 && spiralMatrix[currentRow][currentCol+1] === 0) {
            let newCurrentCol = fillCurrentCol(currentCol, currentRow, numberToFill, '+');
            numberToFill += newCurrentCol -currentCol;
            currentCol = newCurrentCol;
        } else if (currentRow + 1 < dim1&& spiralMatrix[currentRow + 1][currentCol] === 0 ) {
            let newCurrentRow = fillCurrentRow(currentCol, currentRow, numberToFill,  '+');
            numberToFill += newCurrentRow -currentRow;
            currentRow = newCurrentRow;
        } else if (currentCol - 1 >= 0 && spiralMatrix[currentRow][currentCol-1] === 0) {
            let newCurrentCol = fillCurrentCol(currentCol, currentRow, numberToFill, '-');
            numberToFill += currentCol - newCurrentCol;
            currentCol = newCurrentCol;
        } else if (currentRow - 1 >= 0 && spiralMatrix[currentRow - 1][currentCol] === 0) {
            let newCurrentRow = fillCurrentRow(currentCol, currentRow, numberToFill,  '-');
            numberToFill += currentRow -newCurrentRow;
            currentRow = newCurrentRow;
        } else {
            for(let row in spiralMatrix){
                console.log(spiralMatrix[row].join(' '));
            }
            break;
        }
    }

    function fillCurrentCol(currentCol, currentRow, numberToFill, operand) {
        switch (operand){
            case '+':
                while (true) {
                    spiralMatrix[currentRow][currentCol] = numberToFill++;
                    if (currentCol + 1 < dim2 && spiralMatrix[currentRow][currentCol+1] === 0) {
                        currentCol++;
                    }else{
                        return currentCol;
                    }
                }
            case '-':
                while (true) {
                    spiralMatrix[currentRow][currentCol] = numberToFill++;
                    if (currentCol - 1 >= 0 && spiralMatrix[currentRow][currentCol-1] === 0) {
                        currentCol--;
                    }else{
                        return currentCol;
                    }
                }
        }
    }
    function fillCurrentRow(currentCol, currentRow, numberToFill, operand) {
        switch (operand){
            case '+':
                while (true) {
                    spiralMatrix[currentRow][currentCol] = numberToFill++;
                    if (currentRow + 1 < dim1 && spiralMatrix[currentRow+1][currentCol] === 0) {
                        currentRow++;
                    }else{
                        return currentRow;
                    }
                }
            case '-':
                while (true) {
                    spiralMatrix[currentRow][currentCol] = numberToFill++;
                    if (currentRow - 1 >= 0 && spiralMatrix[currentRow -1][currentCol] === 0) {
                        currentRow--;
                    }else{
                        return currentRow;
                    }
                }
        }
    }
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);
spiralMatrix(1, 1);