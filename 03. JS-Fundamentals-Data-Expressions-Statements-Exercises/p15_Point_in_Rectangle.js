function pointInRectangle(inputArr) {
    let x = inputArr[0];
    let y = inputArr[1];
    let xMin = inputArr[2];
    let xMax = inputArr[3];
    let yMin = inputArr[4];
    let yMax = inputArr[5];

    if((x <= xMax && x >= xMin) &&(y <= yMax && y >= yMin)){
        console.log("inside")
    }else{
        console.log("outside")
    }
}

pointInRectangle([8, -1, 2, 12, -3, 3]) ;
pointInRectangle([12.5, -1, 2, 12, -3, 3]) ;
pointInRectangle([2, -3, 2, 12, -3, 3]) ;
