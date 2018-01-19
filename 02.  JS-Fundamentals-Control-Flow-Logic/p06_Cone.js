function cone(r, h) {
    let l = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))
    console.log("volume = " + Math.PI * r * r * h / 3)

    let area = Math.PI * r * (r + l)
    console.log("area = " + area)
}

cone(3, 5)