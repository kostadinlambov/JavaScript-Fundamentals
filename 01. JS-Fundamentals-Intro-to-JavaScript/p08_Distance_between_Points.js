function distanceBetweenPoints(x1, y1, x2, y2) {
    let punkt1 = {x: x1, y: y1}
    let punkt2 = {x: x2, y: y2}

    let distance = Math.sqrt(Math.pow((punkt1.x - punkt2.x), 2) + Math.pow((punkt1.y - punkt2.y), 2))

    return distance
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)