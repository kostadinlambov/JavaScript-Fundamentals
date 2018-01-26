function extractSubsequence(arr = []) {

    let numberToCompare = Number.NEGATIVE_INFINITY;
    let result = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= numberToCompare) {
            result.push(arr[i])
            numberToCompare = arr[i];
        }
    }
    console.log(result.join('\n'));

    //// Alternative Solution
    // let x =  (arr, biggestNumber = -Infinity)=>arr.filter(e => ([ret, biggestNumber] =
    //      [parseInt(e) >= biggestNumber, Math.max(biggestNumber, e)])[0])
    //      .join('\n');
    //
    //  console.log(x(arr));
}

extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractSubsequence([1, 2, 3, 4]);
extractSubsequence([20, 3, 2, 15, 6, 1]);