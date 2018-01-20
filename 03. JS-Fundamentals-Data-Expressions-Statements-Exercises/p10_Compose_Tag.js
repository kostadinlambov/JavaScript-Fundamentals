function composeTags(inputArr) {
    let fileLocation = inputArr[0];
    let alternateText = inputArr[1];
    let outputString = `<img src="${fileLocation}" alt="${alternateText}">`;
    console.log(outputString)
}

composeTags(['smiley.gif', 'Smiley Face']);