function treasureLocator(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        let xCoordinate = arr[i];
        let yCoordinate = arr[i + 1];

        checkLocation(xCoordinate, yCoordinate)
    }

    function checkLocation(xCoordinate, yCoordinate) {
        if (xCoordinate >= 0 && xCoordinate <= 2 &&
            yCoordinate >= 6 && yCoordinate <= 8) {
            console.log('Tonga');
        } else if (xCoordinate >= 1 && xCoordinate <= 3 &&
            yCoordinate >= 1 && yCoordinate <= 3) {
            console.log('Tuvalu');
        } else if (xCoordinate >= 5 && xCoordinate <= 7 &&
            yCoordinate >= 3 && yCoordinate <= 6) {
            console.log('Samoa');
        } else if (xCoordinate >= 4 && xCoordinate <= 9 &&
            yCoordinate >= 7 && yCoordinate <= 8) {
            console.log('Cook');
        } else if (xCoordinate >= 8 && xCoordinate <= 9 &&
            yCoordinate >= 0 && yCoordinate <= 1) {
            console.log('Tokelau');
        } else {
            console.log('On the bottom of the ocean');
        }
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);