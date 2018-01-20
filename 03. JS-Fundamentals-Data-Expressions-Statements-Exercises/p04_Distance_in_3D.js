function calculateDistance(array) {
    let firstPoint = {x: array[0], y: array[1], z: array[2]};
    let secondPoint = {x: array[3], y: array[4], z: array[5]};

    let distance = Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) +
        Math.pow((firstPoint.y - secondPoint.y), 2) +
        Math.pow((firstPoint.z - secondPoint.z), 2));

    console.log(distance);
}

calculateDistance([3.5, 0, 1, 0, 2, -1]);