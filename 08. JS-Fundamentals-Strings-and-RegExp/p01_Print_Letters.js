function printLetters(str) {
    for (let index in str) {
        console.log(`str[${index}] -> ${str[index]}`);
    }
}

printLetters('Hello, World!');