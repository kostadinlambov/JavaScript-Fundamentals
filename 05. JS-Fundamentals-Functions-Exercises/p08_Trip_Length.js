function findTwoShortestSegments(arr) {
    let firstPoint = {x:arr[0], y:arr[1]};
    let secondPoint = {x:arr[2], y:arr[3]};
    let thirdPoint = {x:arr[4], y:arr[5]};

    let calculateDistance = function (point1, point2) {
        return  Math.sqrt(Math.pow((point1.x - point2.x),2)+
            Math.pow((point1.y - point2.y),2))
    };

    let findShortestPath = function (point1, point2, point3) {
        let lengthOfFirstSegment = calculateDistance(point1, point2);
        let lengthOfSecondSegment = calculateDistance(point2, point3);
        let lengthOfThirdSegment = calculateDistance(point3, point1);

        if(lengthOfFirstSegment <= lengthOfSecondSegment &&
            lengthOfFirstSegment <= lengthOfThirdSegment){
            if(lengthOfSecondSegment<=lengthOfThirdSegment){
                let distance = lengthOfFirstSegment + lengthOfSecondSegment;
                console.log(`1->2->3: ${distance}`);
            }else{
                let distance = lengthOfFirstSegment + lengthOfThirdSegment;
                console.log(`2->1->3: ${distance}`);
            }
        }else if(lengthOfSecondSegment <= lengthOfFirstSegment &&
            lengthOfSecondSegment <= lengthOfThirdSegment) {
            if (lengthOfFirstSegment <= lengthOfThirdSegment) {
                let distance = lengthOfFirstSegment + lengthOfSecondSegment;
                console.log(`1->2->3: ${distance}`);
            } else {
                let distance = lengthOfSecondSegment + lengthOfThirdSegment;
                console.log(`1->3->2: ${distance}`);
            }
        }else if(lengthOfThirdSegment <= lengthOfFirstSegment &&
            lengthOfThirdSegment <= lengthOfSecondSegment) {
            if (lengthOfFirstSegment <= lengthOfSecondSegment) {
                let distance = lengthOfFirstSegment + lengthOfThirdSegment;
                console.log(`2->1->3: ${distance}`);
            } else {
                let distance = lengthOfThirdSegment + lengthOfSecondSegment;
                console.log(`1->3->2: ${distance}`);
            }
        }
    };

    findShortestPath(firstPoint, secondPoint, thirdPoint);
}

findTwoShortestSegments([0, 0, 2, 0, 4, 0]);
findTwoShortestSegments([5, 1, 1, 1, 5, 4]);
findTwoShortestSegments([-1, -2, 3.5, 0, 0, 2]);