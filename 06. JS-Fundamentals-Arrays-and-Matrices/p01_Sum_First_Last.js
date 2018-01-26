function sumFirstLast(arr) {
    let firstNum = Number(arr[0]);
    let secondNum = Number(arr[arr.length - 1]);
    return firstNum + secondNum;
}

console.log(sumFirstLast([10, 20, 30, 40]));
console.log(sumFirstLast([40]));
console.log(sumFirstLast([]));