function printDNAHelix(number) {
    let helix = 'ATCGTTAGGG';
    let helixCharArr = helix.split('');
    let result = '';
    let counter = 0;
    let indexChainMember = 0;
    while (true) {
        if (counter === number) {
            break
        }
        addChainMember(counter, indexChainMember);

        counter++;
        indexChainMember += 2;
    }

    console.log(result);

    function addChainMember(counter, indexChainMember) {
        counter = counter % 4;
        indexChainMember = indexChainMember % 10;

        let indexFirstChainMember = indexChainMember;
        let indexSecondChainMember = indexChainMember + 1;
        let firstChainMember = helixCharArr[indexFirstChainMember];
        let secondChainMember = helixCharArr[indexSecondChainMember];

        switch (counter) {
            case 0:
                result += `**${firstChainMember}${secondChainMember}**\n`;
                break;
            case 1:
                result += `*${firstChainMember}--${secondChainMember}*\n`;
                break;
            case 2:
                result += `${firstChainMember}----${secondChainMember}\n`;
                break;
            case 3:
                result += `*${firstChainMember}--${secondChainMember}*\n`;
                break;
        }
    }
}

printDNAHelix(10);
