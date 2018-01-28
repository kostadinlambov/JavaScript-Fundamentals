function fillForm(username, email, phone, data) {
    let regex = /<([!@+])[a-zA-Z]+(\1)>/g;
    let result = [];

    for (let element of data) {
        element = element.replace(regex, fillFields)
        result.push(element)
    }

    console.log(result.join('\n'));

    function fillFields(match, group1){
        switch (group1){
            case '!': return username;
            case '@': return email;
            case '+': return phone;
        }
    }
}
fillForm('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);