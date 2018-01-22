//function calculator(a, b, symbol) {
function calculator(arr) {
    let add = function (c, d) {return c + d}
    let subtract = function (c, d) {return c - d}
    let multiply = function (c, d) {return c * d}
    let divide = function (c, d) {return c / d}

    let a = arr[0]
    let b = arr[1]
    let symbol = arr[2] + ""
    switch (symbol){
        case '*': return multiply(a, b)
        case '/': return divide(a, b)
        case '+': return add(a, b)
        case '-': return subtract(a, b)
    }
}

console.log(calculator(5, 6, '*'));
console.log(calculator([5, 6, '/']));
console.log(calculator(5, 6, '-'));