function calculateDistance(array) {
    let firstObjectVelocity = array[0];
    let secondObjectVelocity = array[1];
    let timeInSeconds = array[2];
    let timeInHours = timeInSeconds / 3600;

    let dist1 = firstObjectVelocity * timeInHours;
    let dist2 = secondObjectVelocity * timeInHours;

    let difference = Math.abs(dist1 - dist2);
    console.log(difference * 1000);
}

calculateDistance([11, 10, 120]);