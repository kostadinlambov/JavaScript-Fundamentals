function scoreToHtml(json) {
    let regex = /[<>&"']/g;

    let html = '<table>\n';

    html += '  <tr><th>name</th><th>score</th></tr>\n';

    let scores = JSON.parse(json);

    for (let score of scores) {
        html += '  <tr>';
        let name = score.name.replace(regex, replacementFunc);
        html += `<td>${name}</td>`;
        html += `<td>${Number(score.score)}</td>`;
        html += '</tr>\n'
    }

    html += '</table>';

    console.log(html);

    function replacementFunc(match){
        switch (match){
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            case "'": return '&#39;';
        }
    }
}

scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');

scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');