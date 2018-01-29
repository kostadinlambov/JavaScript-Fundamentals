function captureTheNumbers(inputArr) {
    let regex = /\d+/g;

    let result = [];
    let match;
    for (let line of inputArr) {
        while (match = regex.exec(line)) {
            result.push(match)
        }
    }
    console.log(result.join(' '));
}

captureTheNumbers([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);

captureTheNumbers([
    '123a456',
    '789b987',
    '654c321',
    '0']);
