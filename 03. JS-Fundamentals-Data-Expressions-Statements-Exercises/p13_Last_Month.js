function printLastDateOfPreviousMonth(inputArr) {
    let day = inputArr[0];
    let month = inputArr[1];
    let year = inputArr[2];

    // let date = new Date(year, month - 1, day);
    // let oneDay = 24 * 60 * 60 * 1000;
    // let lastDayOfLastMonth = new Date(date.getTime() -
    //     (date.getDate()) * oneDay);
    // console.log(lastDayOfLastMonth.getDate())

    let lastDayOfLastMonth = new Date(year, month - 1, 0);
    console.log(lastDayOfLastMonth.getDate())
}

printLastDateOfPreviousMonth([17, 3, 2002]);