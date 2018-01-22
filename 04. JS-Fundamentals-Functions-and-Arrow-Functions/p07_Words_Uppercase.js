function toUpper(str) {
    console.log(str.toUpperCase()
        .split(/\W+/)
        .filter(x => x !== '')
        .join(', '))
}
toUpper('Hi, how are you?')