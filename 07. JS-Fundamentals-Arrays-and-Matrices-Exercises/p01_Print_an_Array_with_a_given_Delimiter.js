function printArrayWithDelimiter(strArr = []) {
    let delimiter = strArr.pop();
    let result = strArr.join(delimiter);
    console.log(result);
}


printArrayWithDelimiter(['One','Two','Three','Four','Five','-']);