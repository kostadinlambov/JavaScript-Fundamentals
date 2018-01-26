function printEveryNthElement(arr = []) {
    let stepToPrint = Number(arr.pop());

    for (let i = 0; i < arr.length; i += stepToPrint) {
        console.log(arr[i]);
    }
}

printEveryNthElement([5, 20, 31, 4, 20, 2]);
printEveryNthElement(['dsa', 'asd', 'test', 'tset', 2]);