function biggestOf3Numbers(numbersArr) {
    let firstNumber = numbersArr[0];
    let secondNumber = numbersArr[1];
    let thirdNumber = numbersArr[2];

    let biggestNumber = Math.max(firstNumber,secondNumber, thirdNumber);
    console.log(biggestNumber)
}

biggestOf3Numbers([130, 5, 99]);