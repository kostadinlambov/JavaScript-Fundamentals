function splitString(str, delimiter) {
    let result = str.split(delimiter).join('\n');
    console.log(result);
}

splitString('One-Two-Three-Four-Five ', '-');
splitString('http://platform.softuni.bg', '.');