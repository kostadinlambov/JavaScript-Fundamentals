function checkPoints(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        let point = {x: arr[i], y: arr[i+1], z: arr[i+2]};
        if (checkXCoordinate(point.x) &&
            checkYCoordinate(point.y) &&
            checkZCoordinate(point.z)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function checkXCoordinate(xCoordinate) {
        return xCoordinate >= 10 && xCoordinate <= 50;
    }

    function checkYCoordinate(yCoordinate) {
        return yCoordinate >= 20 && yCoordinate <= 80;
    }

    function checkZCoordinate(zCoordinate) {
        return zCoordinate >= 15 && zCoordinate <= 50;
    }
}

checkPoints([8, 20, 22]);
checkPoints([13.1, 50, 31.5]);
checkPoints([50, 80, 50]);
checkPoints([-5, 18, 43]);
checkPoints([13.1, 50, 31.5,
            50, 80, 50,
            -5, 18, 43]);
