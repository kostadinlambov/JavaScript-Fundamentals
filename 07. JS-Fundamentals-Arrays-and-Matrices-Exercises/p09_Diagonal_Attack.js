function diagonalsSum(arr = []) {
    let matrix = arr.map(row => row.split(' ').map(Number));

    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        for (let col = 0; col < matrix[row].length; col++) {
            if(row === col){
                sumMainDiagonal += matrix[row][col];
            }
            if(col === currentRow.length - 1 - row){
                sumSecondaryDiagonal += matrix[row][col];
            }
        }
    }

    if(sumMainDiagonal === sumSecondaryDiagonal){
        let resultMatrix = fillValues(matrix, sumMainDiagonal);
        for(let row of resultMatrix){
            console.log(row.join(' '));
        }
    }else{
        for(let row of matrix){
            console.log(row.join(' '));
        }
    }

    function fillValues(matrix, sum) {
        for (let row = 0; row < matrix.length; row++) {
            let currentRow = matrix[row];
            for (let col = 0; col < matrix[row].length; col++) {
                if((row !== col) && (col !== currentRow.length - 1 - row) ){
                     matrix[row][col] = sum;
                }
            }
        }
        return matrix;
    }
}
// diagonalsSum([
//     '5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']);

diagonalsSum(
    ['1 1 1',
    '1 1 1',
    '1 1 0']
);