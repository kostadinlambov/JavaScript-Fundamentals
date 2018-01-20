function assignProperties(inputArr) {
    let object = {};
    object[inputArr[0]] = inputArr[1];
    object[inputArr[2]] = inputArr[3];
    object[inputArr[4]] = inputArr[5];
    console.log(object)
}

assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);