function JSONToHTMLTable(json) {
    let regex = /[<>&"']/g;
    let objArr = JSON.parse(json);

    let html = '<table>\n';
    html += '   <tr>';
    for (let key in objArr[0]) {
        html += `<th>${key}</th>`
    }
    html += '</tr>\n';

    for (let element of objArr) {
        html += '   <tr>';
        for (let key in element) {
            html += '<td>';
            let objValue = element[key].toString();
            objValue = objValue.replace(regex, replacementFunc);
            html += `${objValue}`;
            html += '</td>';
        }
        html += '</tr>\n';
    }
    html += '</table>';
    console.log(html);

    function replacementFunc(match) {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            case "'": return '&#39;';
        }
    }
}

JSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
JSONToHTMLTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}]');
