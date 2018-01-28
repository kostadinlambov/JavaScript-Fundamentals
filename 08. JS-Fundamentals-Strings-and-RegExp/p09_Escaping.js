function htmlEscape(input) {
    let regex = /[<>&"]/g;
    let result = [];

    result.push('<ul>');
    for(let line of input ){
        line = line.replace(regex, replacementFunc);
        result.push('  <li>' + line + '</li>');
    }

    result.push('</ul>');

    console.log(result.join('\n'));

    function replacementFunc(match){
        switch (match){
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
        }
    }
}

htmlEscape([
    '<div style=\"color: red;\">Hello, Red!</div>',
    '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);