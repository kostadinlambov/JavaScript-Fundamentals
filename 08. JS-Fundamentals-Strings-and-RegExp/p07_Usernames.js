function extractUserNames(arr) {
    let users = arr.map(s => s.split('@'));
    let result = [];

    for (let user of users) {
        let [name, domain] = user;
        let domainTokens = domain.split('.');
        domainTokens = domainTokens.map(e => e[0]);
        let userName = name + '.' +  domainTokens.join('');

        result.push(userName);
    }

    console.log(result.join(', '));
}

extractUserNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);