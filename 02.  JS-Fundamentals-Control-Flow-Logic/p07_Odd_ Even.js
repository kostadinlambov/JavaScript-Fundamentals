function oddEven(number) {
    if (number % 2 === 0) {
        console.log("even");
    } else if (number % 2  === Math.round(number % 2)) {
        console.log("odd");
    } else{
        console.log("invalid");
    }
}

oddEven(-10.001);
oddEven(5);
oddEven(12);