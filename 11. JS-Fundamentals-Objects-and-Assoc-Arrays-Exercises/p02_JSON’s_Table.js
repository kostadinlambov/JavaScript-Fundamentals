function jsonToTable(strArr) {

    let html = '<table>\n';

    for (let i = 0; i < strArr.length; i++) {
        let currentEmployeeObj = JSON.parse(strArr[i]);

        html += '\t<tr>\n';
        html += `		<td>${currentEmployeeObj.name}</td>\n`;
        html += `		<td>${currentEmployeeObj.position}</td>\n`;
        html += `		<td>${Number(currentEmployeeObj.salary)}</td>\n`;
        html += '\t<tr>\n';
    }

    html += '</table>\n';

    console.log(html);
}

jsonToTable(
    ['{"name": "Pesho", "position": "Promenliva", "salary": 100000}',
        '{"name": "Teo", "position": "Lecturer", "salary": 1000}',
        '{"name": "Georgi", "position": "Lecturer", "salary": 1000}']);