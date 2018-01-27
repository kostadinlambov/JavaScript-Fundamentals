function calculator(a, b, op) {
    let add = function (c, d) {return c + d};
    let subtract = function (c, d) {return c - d};
    let multiply = function (c, d) {return c * d};
    let divide = function (c, d) {return c / d};

    switch (op){
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        case '+': return add(a, b);
        case '-': return subtract(a, b);
    }
}

console.log(calculator(5, 6, '*'));
console.log(calculator(5, 6, '-'));