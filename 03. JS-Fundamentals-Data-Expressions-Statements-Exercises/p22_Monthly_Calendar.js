function calendar([day, month, year]) {
    let result = "<table>\n"
    result += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let firstDayOfMonth = new Date(year, month - 1, 1);
    let lastDayOfLastMonth = new Date(firstDayOfMonth.getTime() - 1);
    let firstDayOfNextMonth = new Date(year, month, 1);
    let lastDayOfMonth = new Date(firstDayOfNextMonth.getTime() - 1);
    let firstDayOfTheWeek = new Date(firstDayOfMonth.getTime() -
        (firstDayOfMonth.getDay() ) * oneDay);

    result += '  <tr>';
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        result += `<td class="prev-month">${lastDayOfLastMonth.getDate() - firstDayOfMonth.getDay() + 1 + i}</td>`;
        if (i === 6) {
            result += `</tr>\n`;
        }
    }
    let j = 1;
    for (let i = firstDayOfMonth.getDay(); i < 7; i++) {
        if (j == day) {
            result += `<td class="today">${j}</td>`;
        } else {
            result += `<td>${j}</td>`;
        }

        if (i === 6) {
            result += `</tr>\n`;
        }
        j++;
    }

    let l = 1;
    let currentDay = 0;
    for (let k = j; k <= lastDayOfMonth.getDate(); k++) {
        if (l === 1) {
            result += `  <tr>`;
        }
        if (k == day) {
            result += `<td class="today">${k}</td>`;
        } else {
            result += `<td>${k}</td>`;
        }

        if (l === 7) {
            result += `</tr>\n`;
            l = 0;
        }
        l++;
        currentDay = k;
    }

    if (lastDayOfMonth.getDay() !== 6) {
        let p = 1;
        for (let i = lastDayOfMonth.getDay() + 1; i < 7; i++) {

            result += `<td class="next-month">${p}</td>`;
            p++;
        }
        result += `</tr>\n`;
    }

    let firstDayofLastWeek = new Date(year, month - 1, currentDay + 1);

    result += '</table>\n';
    return result;
}

calendar([1, 4, 2016]);
calendar([20, 1, 2018]);
calendar([27, 3, 2016]);