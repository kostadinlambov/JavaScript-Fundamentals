function expressionSplit(expression) {

    let regex = /[\s,();.]+/;

    console.log(expression.split(regex).filter(x => x !== '').join('\n'));

}

expressionSplit('let sum = 4 * 4,b = "wow";');
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');