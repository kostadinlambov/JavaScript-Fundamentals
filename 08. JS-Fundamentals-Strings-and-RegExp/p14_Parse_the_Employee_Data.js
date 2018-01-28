function parseEmployeeData(employees) {
    let regex = /^([A-Z][a-zA-Z]*)\s+-\s+([1-9]([0-9])*)\s+-\s+([A-Za-z0-9-]+(\s+[A-Za-z0-9-]+)*)$/;

    let match;

    for (let employee of employees) {
        match = regex.exec(employee);
        if (match) {
            let name = match[1];
            let position = match[4];
            let salary = match[2];
            console.log(`Name: ${name}
Position: ${position}
Salary: ${salary}`);
        }
    }
}

parseEmployeeData([
    'Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);

// parseEmployeeData([
//     'Jonathan - 2000 - Manager',
//     'Peter- 1000- Chuck',
//     'George - 1000 - Team Leader ']);

