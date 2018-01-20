function triangleOfDollars(number) {
    for (let i = 1; i <= number; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += "$"
        }
        console.log(row)
    }
}
function triangleOfDollars2(number) {
    for (let i = 1; i <= number; i++) {
        let row = '';
        console.log(new Array(i+1).join('+'));
        console.log('#'.repeat(i));
        for (let j = 1; j <= i; j++) {
            row += "$"
        }
        console.log(row);
    }
}

triangleOfDollars2(3);
triangleOfDollars(7);