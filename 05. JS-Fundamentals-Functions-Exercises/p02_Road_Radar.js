function roadRadar() {
    let currentSpeed = arguments[0][0];
    let currentArea = arguments[0][1];
    let speedLimit = 0;

    if (currentArea === 'motorway') {
        speedLimit = 130;
        checkSpeed(currentSpeed, speedLimit);
    } else if (currentArea === 'interstate') {
        speedLimit = 90;
        checkSpeed(currentSpeed, speedLimit);
    } else if (currentArea === 'city') {
        speedLimit = 50;
        checkSpeed(currentSpeed, speedLimit);
    } else if (currentArea === 'residential') {
        speedLimit = 20;
        checkSpeed(currentSpeed, speedLimit);
    }

    function checkSpeed(currentSpeed, speedLimit) {
        let speedDiff = currentSpeed - speedLimit;
        if (speedDiff > 40) {
            console.log('reckless driving');
        } else if (speedDiff > 20) {
            console.log('excessive speeding');
        } else if (speedDiff > 0) {
            console.log('speeding');
        }
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);