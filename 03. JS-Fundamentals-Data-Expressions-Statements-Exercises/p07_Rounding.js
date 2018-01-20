function roundingNumbers(numbersArr) {
    let number = numbersArr[0];
    let precision = numbersArr[1];

    let factor = Math.pow(10, precision);

    console.log(Math.round(number * factor) / factor);
}

roundingNumbers([245896.5, 1])

function roundToPrecision(numbersArr) {
    let precision = `e+${numbersArr[1]}`
    //console.log(precision);

    let precision2 = `e-${numbersArr[1]}`
   // console.log(precision2);
    return +(Math.round(numbersArr[0] + precision)  + precision2);
}

console.log(roundToPrecision([10.5, 3]));