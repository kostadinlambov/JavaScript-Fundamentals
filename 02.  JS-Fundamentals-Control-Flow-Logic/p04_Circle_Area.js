function circleArea(radius) {
    let area = Math.PI * radius *radius

    console.log(area)
    console.log(area.toFixed(2))

    console.log('---------------')

    let areaRounded = Math.round(area * 100) / 100
    console.log(areaRounded)
}

circleArea(5)