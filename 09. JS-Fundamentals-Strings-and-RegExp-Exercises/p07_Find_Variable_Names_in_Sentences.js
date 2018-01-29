function findVariableInSentence(str) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g;

    let result = [];
    let match = regex.exec(str);

    while (match){
        result.push(match[1]);
        match = regex.exec(str);
    }
    console.log(result.join(','));
}

findVariableInSentence('The _id and _age variables are both integers.');

findVariableInSentence('__invalidVariable _evenMoreInvalidVariable_ _validVariable');