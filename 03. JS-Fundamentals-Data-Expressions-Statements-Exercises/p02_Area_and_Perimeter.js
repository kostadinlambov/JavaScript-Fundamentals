function calculate(sideA, sideB) {
    let area = sideA * sideB
    let perimeter = 2*(sideA + sideB)

    console.log(area.toFixed(2))
    console.log(perimeter.toFixed(2))
}

calculate(1, 3)