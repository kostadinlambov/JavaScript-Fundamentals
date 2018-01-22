function checkValidityOfDistance(arr) {
    let firstPoint = {x: arr[0], y: arr[1]};
    let secondPoint = {x: arr[2], y: arr[3]};
    let origin = {x: 0, y: 0};

    function check(firstP, secondP) {
        let validationStr = '';
        let distance = Math.sqrt(
            Math.pow((firstP.x - secondP.x), 2) +
            Math.pow((firstP.y - secondP.y), 2));

        Number.isInteger(distance) ? validationStr = 'valid' : validationStr = 'invalid';
        let result = `{${firstP.x}, ${firstP.y}} to {${secondP.x}, ${secondP.y}} is ${validationStr}`;
        console.log(result);
    }
    check(firstPoint, origin);
    check(secondPoint, origin);
    check(firstPoint, secondPoint);
}

checkValidityOfDistance([3, 0, 0, 4]);
checkValidityOfDistance([2, 1, 1, 1]);