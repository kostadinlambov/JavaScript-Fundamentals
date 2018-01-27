function oddNumbers(number) {
    for (let i = 1; i <= number; i++) {
        if(i % 2 === 1){
            console.log(i);
        }
    }
}

oddNumbers(5);
oddNumbers(4);
oddNumbers(7);