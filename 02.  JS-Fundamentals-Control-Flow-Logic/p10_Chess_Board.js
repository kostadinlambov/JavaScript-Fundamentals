function draw(num) {
    let result = "<div class=\"chessboard\">\n"
    for (let i = 0; i < num; i++) {
        result += ' <div>\n'

        for (let a = 0; a < num; a++) {
            let color = (i + a) % 2 === 0 ? 'black' : 'white'
            result += `    <span class="${color}"></span>\n`
        }
        result += ' </div>\n'
    }
    result += ' </div>\n'
    return result
}