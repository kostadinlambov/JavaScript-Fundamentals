function multiplicationTable(number) {
    let result = "<table border=\"1\">\n"
    result += '  <tr><th>x</th>';
    for (let a = 1; a <= number; a++) {
        result += `<th>${a}</th>`
    }
    result += '</tr>\n';

    for (let i = 1; i <= number; i++) {
        result += `  <tr><th>${i}</th>`;
        for (let a = 1; a <= number; a++) {
            result += `<td>${a * i}</td>`
        }
        result += '</tr>\n';
    }

    result += "</table>\n";
    return result;
}